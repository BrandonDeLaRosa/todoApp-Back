const { Router } = require('express');
const { allUsers, createUser, findByName, findById, deleteUser, updateUser } = require('../Controllers/users.controllers');

const router = Router();


router.get('/api/v1/all-users', allUsers);
router.post('/api/v1/new-user', createUser);

router.post('/api/v1/username', findByName);
router.get('/api/v1/user/:id', findById);

router.delete('/api/v1/delete-user/:id', deleteUser);
router.put('/api/v1/user-update/:id', updateUser)

module.exports = router;