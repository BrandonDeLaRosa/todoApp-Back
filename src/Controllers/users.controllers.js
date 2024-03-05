const UserServices = require('../Services/users.services');

const allUsers = async(req,res) => {
    try {
        const users = await UserServices.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json(error);
    }
}

const createUser = async (req,res) => {
    try {
        const user = req.body;
        console.log(user);
        const nuevo = await UserServices.newUser(user);
        res.status(200).json(nuevo);
    } catch (error) {
        res.status(400).json(error)
    }
}

const findByName = async (req,res) => {
    try {
        const {name} = req.body;
        // console.log(username);
        const user = await UserServices.getByName(name);
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
}

const findById = async(req,res) => {
    try {
        const {id} = req.params;
        const user = await UserServices.getById(id);
        if(!user){
            res.status(404).json({
                message: "User not found"
            });
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
}


const deleteUser = async(req,res) => {
    try {
        const {id} = req.params;
        const user = await UserServices.destroyUser(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error);
    }
}

const updateUser = async (req,res) => {
    try {
        const {id} = req.params;
        const userBody = req.body;
        const user = await UserServices.actualizarUsuario(id, userBody);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json(error);
    }
}


module.exports = {
    allUsers,
    createUser,
    findByName,
    findById,
    deleteUser,
    updateUser
}