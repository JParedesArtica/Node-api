const express = require('express');
const app = express();
app.use(express.json());

const todos = [
    { "label": "Drink some water", "done": false },
    { "label": "Do my homework", "done": false }
];


const server =app.listen(8080, function(){
    let port= server.address().port
    console.log("Server running on port",port)
})

app.get('/',(req,res)=>{
    res.status(200).json({'name':'Joe Doe'})
})

app.get('/todos', (req,res)=>{
    res.status(200).json(todos)
})