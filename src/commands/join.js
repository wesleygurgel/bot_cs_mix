const { Player, Queue } = require("../models");

module.exports = {
    name: "join",
    description: "Entrar na fila.",
    async execute(message, args) {
        try {
            console.log("começando join");
            // Criar ou atualizar o jogador
            const [player, created] = await Player.findOrCreate({
                where: { discord_id: message.author.id },
                defaults: {
                    username: message.author.username,
                },
            });

            console.log("player: ", player);
            console.log("created: ", created);

            // Verificar se o jogador já está na fila
            const isInQueue = await Queue.findOne({
                where: { player_id: player.player_id },
            });

            if (isInQueue) {
                message.reply("Você já está na fila! Para ver a fila digite `!fila`.");
                return;
            }

            // Adicionar o jogador à fila
            await Queue.create({
                player_id: player.player_id,
                status: "qualquer",
            });

            message.reply("Você entrou na fila! Para ver a fila digite `!fila`.");
        } catch (error) {
            console.error(error);
            message.reply(
                "Ocorreu um erro ao tentar entrar na fila. Por favor, tente novamente mais tarde."
            );
        }
    },
};
