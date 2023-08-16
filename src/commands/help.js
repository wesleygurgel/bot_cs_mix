const fs = require("fs");
const path = require("path");

module.exports = {
    name: "help",
    description: "Listar todos os comandos disponíveis.",
    execute(message) {
        const commandFiles = fs
            .readdirSync(path.join(__dirname))
            .filter((file) => file.endsWith(".js"));

        let reply = "\n**Comandos disponíveis:**\n\n";

        for (const file of commandFiles) {
            const command = require(`./${file}`);
            reply += `**!${command.name}** - *${command.description}*\n`;
        }

        message.reply(reply);
    },
};
