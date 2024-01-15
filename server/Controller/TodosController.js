const { trusted, default: mongoose } = require("mongoose");
const Todos = require("../Models/Todo");

class TodosController {
  getTodos = async (req, res) => {
    try {
      const allTodos = await Todos.find({}).sort({ createdAt: -1 });
      res.status(200).send(allTodos);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  createTodo = async (req, res) => {
    const dbTodo = req.body;
    try {
      const newTodo = await Todos.create(dbTodo);
      res.status(201).send(newTodo);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  updateTodo = async (req, res) => {
    const { id } = req.params;
    try {
      //check if the id is valid
      if (!mongoose.Types.isValid(id)) {
        res.status(404).send(`This is todo with the id of ${id}`);
      }
      const todoID = { _id: id };
      const update = { complete: true };
      const updateTodo = await Todos.findOneAndUpdate({ todoID, update });
      if (!todoID.complete) {
        res.status(404).send(`This is todo with the id of ${id}`);
      }
      res.status(201).send(updateTodo);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
      //check if the id is valid
      if (!mongoose.Types.isValid(id)) {
        res.status(404).send(`This is todo with the id of ${id}`);
      }
      const deleteTodo = await Todos.findOneAndDelete({ _id: id });
      res.status(200).send(deleteTodo);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
}

module.exports = new TodosController();
