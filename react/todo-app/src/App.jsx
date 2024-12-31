import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Gym",
      description: "Go to gym",
      Is_it_done: false,
    },
    {
      title: "Study",
      description: "Go and study",
      Is_it_done: false,
    },
  ]);

  function addTodo() {
    // [1,2]
    // [...todos,3] == [1,2,3]
    setTodos([
      ...todos,
      {
        title: "New todo",
        description: "New one is added",
      },
    ]);
  }
  return (
    <div>
      <button onClick={addTodo}>Add new todo</button>
      {todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description} />;
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.description}</h3>
    </div>
  );
}

// In the code that you are showing as not working, the issue lies in the for loop within the App function. Here’s why it’s not working:

// Problem:
// In React, a return statement inside a loop, like your for loop, will terminate the loop immediately. As a result, only the first iteration of the loop runs, and the rest are ignored.
// React expects the App function to return a single JSX element or a set of elements wrapped within a parent (like a <div>). The for loop in this case does not allow for all the Todo components to be rendered because the return inside it prevents subsequent iterations.
// Why the Other Code Works:
// In the second example (shown in the image), the .map() method is used instead of a for loop. Here's why it works:

// map() returns an array of elements: Each iteration of the map() creates a Todo component and returns it.
// React is capable of rendering an array of JSX elements directly.
// The .map() method doesn't interrupt itself like the return in the for loop does; it processes every element in the todos array and creates a Todo component for each.
export default App;
