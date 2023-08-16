const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Player extends Model {}
Player.init(
    {
        player_id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        discord_id: DataTypes.STRING,
        username: DataTypes.STRING,
    },
    { sequelize, tableName: "players", timestamps: true }
);

module.exports = Player;
