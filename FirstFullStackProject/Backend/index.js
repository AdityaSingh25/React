const express = require("express");
const bodyParser = require("body-parser");
const { createTodo, updateTodo } = require("./types");
const { Todos } = require("./db");
const PORT = 3000;
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedpayload = createTodo.safeParse(createPayload);
  if (!parsedpayload.success) {
    res.status(411).json({
      msg: "you send the wrong inputs",
    });
  } else {
    await Todos.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });
    res.json({
      msg: " To do created 🤙",
    });
  }
});

app.get("/todos", async function (req, res) {
  const todos = await Todos.find({}); // Todos.find({}) will return a promise
  res.json({
    todos: todos,
  });
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedpayload = updateTodo.safeParse(updatePayload);

  if (!parsedpayload.success) {
    res.status(411).json({
      msg: "you send the wrong inputs",
    });
  } else {
    await Todos.updateOne({ _id: req.body.id }, { completed: true });
    res.json({
      msg: "Update is done in db",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
