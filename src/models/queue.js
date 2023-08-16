const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Queue extends Model {}
Queue.init(
    {
        queue_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        player_id: DataTypes.INTEGER,
    },
    { sequelize, tableName: "queue", timestamps: true}
);

module.exports = Queue;
