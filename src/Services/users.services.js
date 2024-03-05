const Users = require('../models/users.model');

class UserServices {

    static async getUsers() {
        try {
            const getAllUsers = await Users.findAll();
            return getAllUsers
        } catch (error) {
            throw(error)
        }
    }

    static async newUser (user){
        try {
            const nUser = await Users.create(user);
            return nUser
        } catch (error) {
            throw(error)
        }
    }

    static async getByName (name){
        try {
            const user = await Users.findOne({
                where: {name}
            })
            return user
        } catch (error) {
            throw (error)
        }
    }

    static async getById(id){
        try {
            const geId = await Users.findByPk(id);
            return geId
        } catch (error) {
            throw(error)
        }
    }

    static async destroyUser(id){
        try {
            const user = await Users.destroy({
                where: {id}
            });
            return user
        } catch (error) {
            throw (error)
        }
    }

    static async actualizarUsuario(id, userBody){
        try {
            const update = await Users.update(userBody,{
                where: {id}
            });
            return update
        } catch (error) {
            throw(error)
        }
    }

}

module.exports = UserServices;