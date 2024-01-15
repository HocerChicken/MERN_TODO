const express = require("express");
const todosController = require("../Controller/todosController");

const router = express.Router();

// GET /api/todos
router.get("/", todosController.getTodos);

// POST /api/todos
router.post("/", todosController.createTodo);

// UPDATE /api/todos/:id
router.put("/:id", todosController.updateTodo);

// DELETE /api/todos/:id
router.delete("/:id", todosController.deleteTodo);

module.exports = router;
