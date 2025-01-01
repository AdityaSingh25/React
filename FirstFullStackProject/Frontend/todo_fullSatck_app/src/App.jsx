import { CreateTodo } from "./components/CreateTodo.jsx";
import { Todos } from "./components/Todos.jsx";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);

  // fetch("http://localhost:3000/todos").then(async function (res) {
  //   const json = await res.json();
  //   setTodos(json.todos);
  // });

  return (
    <div>
      <CreateTodo />
      <Todos
        todos={[
          {
            title: "Go to Gym",
            description: "Gym jao",
            completed: true,
          },
        ]}
      />
    </div>
  );
}
