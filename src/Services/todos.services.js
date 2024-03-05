const Todos = require('../models/todos.model');

class TodoServices {

    static async getAllTodos(){
        try {
            const todos = await Todos.findAll();
            return todos
        } catch (error) {
            throw(error)
        }
    }

    static async newTodo(data){
        try {
            const todo = await Todos.create(data);
            return todo
        } catch (error) {
            throw(error)
        }
    }

    static async deleteTask(id){
        try {
            const todo = await Todos.destroy({
                where:{id}
            });
            return todo
        } catch (error) {
            throw(error)
        }
    }

    static async getById(id){
        try {
            const todo = await Todos.findByPk(id);
            return todo
        } catch (error) {
            throw(error)
        }
    }

    static async updateThisTodo(id, body){
        try {
            const todo = await Todos.update(body,{
                where: {id}
            });
            return todo
        } catch (error) {
            throw(error)
        }
    }
}


module.exports = TodoServices;