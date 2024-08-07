const express = require("express");

let todos = [];

const  getTodoapp = (req, res)=>{
    res.status(200).json(todos);
   
}

const CreateTodo = (req,res)=>{
    console.log(req.body);
    // const {task} = req.body.task
    const newdata = {
        id : todos.length+1,
        task : req.body.task,
        completed: req.body.completed || false
    }
    const task = req.body.task
    console.log(req.body);
    if(!task){
        res.status(404);
        throw new Error("task feald is mandatory")
    }
    todos.push(newdata)
    res.json(newdata);
}



const updateTodo = (req,res)=>{
    // console.log(req.params.id);
    const todo = todos.find(t=> t.id === parseInt(req.params.id));
    if(!todo) return res.status(404).json({message:'Todo Not Found'});

    todo.task = req.body.task || todo.task ;
    todo.completed = req.body.completed !== undefined? req.body.completed : todo.completed ;
    res.status(200).json(todo);
    // console.log(todo);
}

const deleteTodo = (req,res)=>{
    const todo = todos.filter(t=> t.id !== parseInt(req.params.id));
    if(!todo) return res.status(404).josn({message: 'Todo Not Found'});
    todos = todo 
    res.status(200).json(todo);
}

const singleTodo =(req,res)=>{

    const todo =todos.find(t=> t.id === parseInt(req.params.id));
    if(!todo) return( res.status(404).json({message:'Todo Not Found'}))
    res.status(200).json(todo);
}





module.exports = {getTodoapp,
    CreateTodo,
    updateTodo,
    deleteTodo,
    singleTodo

}