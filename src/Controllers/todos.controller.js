const TodoServices = require("../Services/todos.services");

const findAllTodos = async (req,res) => {
    try {
        const todos = await TodoServices.getAllTodos();
        res.status(200).json(todos);
    } catch (error) {
        res.status(400).json(error);
    }
}

const createNewTodo = async (req,res) => {
    try {
        const data = req.body;
        const todo = await TodoServices.newTodo(data);
        res.status(200).json(todo)
    } catch (error) {
        res.status(400).json(error);
    }
}

const deleteTodo = async(req,res) => {
    try {
        const {id} = req.params;
        const todo = await TodoServices.deleteTask(id);
        res.status(200).json(todo);
    } catch (error) {
        res.status(400).json(error);
    }
}


const findById = async (req,res) => {
    try {
        const {id} = req.params;
        const todo = await TodoServices.getById(id);
        res.status(200).json(todo);
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {
    findAllTodos,
    createNewTodo,
    deleteTodo,
    findById
}