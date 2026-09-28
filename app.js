const express = require("express");
const app = express();

app.use(express.json());

let todos = [];

app.get("/", (req, res) => {
  res.send("🚀 DevOps Todo App is Latest Running!");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const todo = req.body;

  if (!todo || !todo.task) {
    return res.status(400).send("Task is required");
  }

  todos.push(todo);
  res.send("Todo added!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
})
