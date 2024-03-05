const express = require('express');
const cors = require('cors');
const db = require('./utils/database');
const userRoutes = require('./Routes/users.routes');
const todoRoutes = require('./Routes/todos.routes');
const initModels = require('./models/initModels');


initModels(); 

const app = express();
app.use(express.json());
app.use(cors())

db.authenticate()
    .then(() => {
        console.log('Authentication succesfull');
    }).catch((error) => {
        console.log(error);
    })

// db.sync({force:true})
db.sync()
    .then(() => {
        console.log('Sync Completed :)');
    }).catch((error) => {
        console.log(error);
    });


const PORT = 1030;

app.use(userRoutes);
app.use(todoRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to To Dos API');
});

app.listen(PORT, () =>{
    console.log('Welcome from the console');
}); 