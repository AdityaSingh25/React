const { mongoose } = require("mongoose");
const mongoos = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:Shubh%401234@cluster0.gk9ec.mongodb.net/todo_app"
);

const todoSchema = mongoos.Schema({
  title: String(),
  description: String(),
  completed: false,
});

const Todos = mongoose.model("Todos", todoSchema);

module.exports = {
  Todos,
};
