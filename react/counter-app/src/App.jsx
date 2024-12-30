import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Custombutton count={count} setCount={setCount}></Custombutton>;
      <Custombutton count={count + 1} setCount={setCount}></Custombutton>;
      <Custombutton count={count - 1} setCount={setCount}></Custombutton>;
      <Custombutton count={count * 100} setCount={setCount}></Custombutton>;
    </div>
  );
}

// khud ka component banaya jo ki button return kr rha, aur we are using it in app component
// app component -> parent
// Custon button component is child component
function Custombutton(props) {
  function onClickhandler() {
    props.setCount(props.count + 1);
  }
  return <button onClick={onClickhandler}>Counter {props.count}</button>;
}

export default App;

//jsx is a file where we can write javacritpt with xml --> javaScriptXLM - jsx
