const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const { createTodo, updateTodo } = require("./types");

const PORT = 3000;

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
    });
    res.json({
      msg: " To do created 🤙",
    });
  }
});

app.get("/todos", function (req, res) {});

app.put("/completed", function (req, res) {
  const updatePayload = req.body;
  const parsedpayload = updateTodo.safeParse(updatePayload);

  if (!parsedpayload.success) {
    res.status(411).json({
      msg: "you send the wrong inputs",
    });
  } else {
    //update in db
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
