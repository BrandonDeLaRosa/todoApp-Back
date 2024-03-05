const { Router } = require('express');
const { findAllTodos, createNewTodo, deleteTodo, findById, updateTodo } = require('../Controllers/todos.controller');

const router = Router();

router.get('/api/v1/to-dos', findAllTodos);
router.post('/api/v1/new-todo', createNewTodo);
router.delete('/api/v1/delete/:id', deleteTodo);
router.get('/api/v1/todo-id/:id', findById);
router.put('/api/v1/update-todo/:id', updateTodo)


module.exports = router;