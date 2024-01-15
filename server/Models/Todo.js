const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Todo = Schema(
  {
    text: {
      type: "string",
      required: true,
    },
    completed: {
      type: "boolean",
      required: true,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("todos", Todo);
