import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        id="title"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="Title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(value);
        }}
      />
      <input
        id="description"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="description"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(value);
        }}
      />

      <button
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert(json);
          });
        }}
        style={{
          padding: 10,
          margin: 10,
        }}
      >
        Add todo
      </button>
    </div>
  );
}
