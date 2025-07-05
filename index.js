const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(express.json());

let todos = []

app.get('/todos',(req,res)=>{
    res.json(todos)
})

app.post('/todos',(req,res) => {
    const {title} = req.body;
    const newTodo = {id : Date.now() ,title};
    res.json(newTodo);
    todos.push(newTodo);
    res.status(201).json(newTodo);
})

app.delete('/todos/:id',(req,res) => {
    const {id} = req.params;
    todos = todos.filter(todo => todo.id != id);
    res.json({message : 'Todo Deleted'});
})

app.listen(5000,() => {
    console.log('✅ Backend running at http://localhost:5000')
})