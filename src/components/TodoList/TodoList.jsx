import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    {
      id: "123",
      text: "Grocery",
      satus: "active",
    },
    {
      id: "124",
      text: "Study",
      satus: "active",
    },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  const filtered = getFilteredItems(todos, filter);

  return (
    <Section>
      <ul>
        <Checkbox onChange={onChange} />
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </Section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}
