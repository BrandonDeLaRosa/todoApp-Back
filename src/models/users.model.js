const { DataTypes } = require('sequelize');
const db = require('../utils/database');


const Users = db.define('Users', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    }
});

module.exports = Users;