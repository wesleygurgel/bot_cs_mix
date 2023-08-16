const { Client, Intents, Collection } = require('discord.js');
const fs = require("fs");
const config = require("../config/config.json");
const sequelize = require('./database');

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.MESSAGE_CONTENT,
  ],
});

client.commands = new Collection();

// Banco de Dados
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Tabelas sincronizadas com o banco de dados.');
  })
  .catch(err => {
    console.error('Erro ao sincronizar tabelas:', err);
  });


// Carregar comandos
const commandFiles = fs
    .readdirSync("./src/commands")
    .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    console.log("Carregando comando: " + command.name + "...");
    client.commands.set(command.name, command);
}

// Carregar eventos
const eventFiles = fs
    .readdirSync("./src/events")
    .filter((file) => file.endsWith(".js"));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
}

// Processar mensagens
client.on("message", (message) => {
    console.log('entrei aqui no nosso listener')
    if (!message.content.startsWith(".") || message.author.bot) return;

    const args = message.content.slice(1).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // Você também pode delegar isso para um comando carregado anteriormente
    const commandFile = client.commands.get(command);
    console.log('command', command)
    console.log('commandFile', commandFile)
    if (commandFile) commandFile.execute(message, args);
});

client.login(config.token);
