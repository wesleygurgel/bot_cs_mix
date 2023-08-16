const { Player, Queue } = require("../models");
const format_fila = require('../utils/format_fila');

module.exports = {
    name: "fila",
    description: "Verificar o status da fila.",
    async execute(message, args) {
        try {
            // Buscar todos os jogadores na fila, ordenados por 'updatedAt'
            const queuePlayers = await Queue.findAll({
                order: [["updatedAt", "ASC"]],
                include: [Player], // Isso irá incluir os detalhes do player através do 'player_id'
            });

            output = format_fila(queuePlayers);

            message.reply(output || "A fila está vazia.");
        } catch (error) {
            console.error(error);
            message.reply(
                "Houve um erro ao verificar o status da fila. Tente novamente mais tarde."
            );
        }
    },
};
