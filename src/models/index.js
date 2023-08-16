const Player = require("./player");
const Queue = require("./queue");

// Definir a relação entre Player e Queue
Queue.belongsTo(Player, { foreignKey: "player_id" });
Player.hasOne(Queue, { foreignKey: "player_id" });

// Exportar os modelos com as relações definidas
module.exports = { Player, Queue };
