const express = require('express');
const app = express();
app.use(express.json());

let todos = [
    { "label": "Drink some water", "done": false },
    { "label": "Do my homework", "done": false }
];



app.get('/',(req,res)=>{
    res.status(200).json({'name':'Joe Doe'})
})

app.get('/todos', (req,res)=>{
    res.status(200).json(todos)
})

app.post('/todos', (req,res)=>{
    const todo = req.body;
    todos.push(todo);
    res.status(200).json(todos);
})

app.delete('/todos/:todoPosition',(req,res)=>{
    const todoPosition= req.params.todoPosition;
    console.log(typeof todoPosition)
    todos = todos.filter((value,position)=> position != todoPosition)
    res.status(200).json(todos)
})

const server =app.listen(8080, function(){
    let port= server.address().port
    console.log("Server running on port",port)
})