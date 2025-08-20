import Header from "./components/Header";
import ToDoList from "./components/todolist";

import React, { useState, useEffect } from "react";


function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState("All"); // ✅ Filter state

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  // ✅ Filtered todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === "Pending") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true; // All
  });

  return (
    <div
      className="container my-4 p-4 rounded shadow"
      style={{ backgroundColor: "#E5E5EA" }}
    >
      <Header addTodo={addTodo} />

      {/* Task Counter */}
      <div className="mb-3 text-center">
        <span className="me-3">Pending: {todos.filter(t => !t.completed).length}</span>
        <span className="text-success">Completed: {todos.filter(t => t.completed).length}</span>
      </div>

      {/* Filter Buttons */}
      <div className="mb-3 text-center">
        <button
          className={`btn me-2 ${filter === "All" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={`btn me-2 ${filter === "Pending" ? "btn-warning" : "btn-outline-warning"}`}
          onClick={() => setFilter("Pending")}
        >
          Pending
        </button>
        <button
          className={`btn ${filter === "Completed" ? "btn-success" : "btn-outline-success"}`}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </button>
      </div>

      <ToDoList
        todos={filteredTodos} // ✅ Pass filtered todos
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default App;
