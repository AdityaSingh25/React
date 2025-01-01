const { mongoose } = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:Shubh%401234@cluster0.gk9ec.mongodb.net/todo_app"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todos = mongoose.model("Todos", todoSchema);

module.exports = {
  Todos,
};
