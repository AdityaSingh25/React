// todos will look like this
// todos = [{
//     title : "dwdw",
//     description : "ceded"
// }]

// now we need to render this array here in todo component

export function Todos({ todos }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed == true ? "Completed" : "Mark as completed"}</button>
          </div>
        );
      })}
    </div>
  );
}
