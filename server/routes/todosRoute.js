const express = require("express");

const router = express.Router();

// GET /api/todos
router.get("/", (req, res) => {
  res.json({ msg: "Get all todos" });
});

// POST /api/todos
router.post("/", (req, res) => {
  res.json({ msg: "create a todo" });
});

// GET /api/todos/:id
router.get("/:id", (req, res) => {
  res.json({ msg: "get a todo" });
});

// UPDATE /api/todos/:id
router.put("/:id", (req, res) => {
  res.json({ msg: "update a todo" });
});

// DELETE /api/todos/:id
router.delete("/:id", (req, res) => {
  res.json({ msg: "delete a todo" });
});
module.exports = router;
