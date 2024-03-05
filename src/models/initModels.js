const Users = require('../models/users.model');
const Todos = require('../models/todos.model');


const initModels = () => {
    Users.hasMany( Todos, {foreignKey:'usersId'});
    Todos.belongsTo( Users, {foreignKey: 'usersId'});
};


module.exports = initModels;