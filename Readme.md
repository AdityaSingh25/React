## First very small full stack app

- need to learn axios(fectch is not rightway), useEffect(for correcting infinite get calls)

- export default function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos").then(async function (res) {
    const json = await res.json();
    setTodos(json.todos);
  });

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


- so every time setTodo(json.todo) calls the component will rerender again then again setTodos will call again component will rerender so caught in infinite loop.
