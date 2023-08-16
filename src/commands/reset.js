const { Player, Queue } = require("../models");
const format_fila = require('../utils/format_fila');

module.exports = {
    name: "reset",
    description: "Resetar a fila.",
    async execute(message, args) {
        try {
            // Buscar a fila atual
            const queuePlayers = await Queue.findAll({
                order: [["updatedAt", "ASC"]],
                include: [Player],
            });

            // Montar a resposta com a fila atual
            let reply = "A fila atual é:\n";
            reply += format_fila(queuePlayers);

            message.reply(reply);

            // Apagar todos os registros da tabela 'queue'
            await Queue.destroy({ where: {} });

            // Confirmar a ação
            message.reply("A fila foi resetada com sucesso!");
        } catch (error) {
            console.error(error);
            message.reply(
                "Ocorreu um erro ao tentar resetar a fila. Por favor, tente novamente mais tarde."
            );
        }
    },
};
