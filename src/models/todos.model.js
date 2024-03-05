const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Todos = db.define('Todos', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING(30),
        allowNull:false
    },
    description:{
        type: DataTypes.TEXT,
        defaultValue:"Not provided"
    },
    isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    usersId:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

module.exports = Todos
