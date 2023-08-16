const { Player, Queue } = require("../models");

module.exports = {
    name: 'leave',
    description: 'Sair da fila.',
    async execute(message, args) {
        try {
            // Procurar o jogador, ou criar se não existir
            const [player, created] = await Player.findOrCreate({
                where: { discord_id: message.author.id },
                defaults: {
                    username: message.author.username,
                },
            });

            // Verificar se o jogador está na fila
            const inQueue = await Queue.findOne({
                where: { player_id: player.player_id },
            });

            if (!inQueue) {
                message.reply("Você não está na fila!");
                return;
            }

            // Remover o jogador da fila
            await Queue.destroy({
                where: { player_id: player.player_id },
            });

            message.reply('Você saiu da fila!');
        } catch (error) {
            console.error(error);
            message.reply(
                "Ocorreu um erro ao tentar sair da fila. Por favor, tente novamente mais tarde."
            );
        }
    },
};
