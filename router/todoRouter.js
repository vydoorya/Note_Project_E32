const express = require("express");
const router = express.Router();

const {getTodoapp,
    CreateTodo,
    updateTodo,
    deleteTodo,
    singleTodo
} = require("../controllers/todoController");


router.get('/', getTodoapp);

router.post('/',CreateTodo);

router.put('/:id',updateTodo);

router.delete('/:id',deleteTodo);

router.get('/:id',singleTodo);




module.exports = router;