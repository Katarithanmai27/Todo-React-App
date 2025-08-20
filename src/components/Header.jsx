import React, { useState } from "react";

function Header({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    addTodo(input);
    setInput("");
  };

  return (
    <header
      className="text-center p-3 rounded mb-4"
      style={{ backgroundColor: "#FFC5C5", color: "#333" }}
    >
      <h1 className="mb-3">🌸 My To-Do List</h1>
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center"
      >
        <input
          type="text"
          className="form-control w-50 me-2 border-0 shadow-sm"
          placeholder="Enter a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="btn shadow-sm"
          style={{
            backgroundColor: "#A1C9F2",
            color: "#fff",
          }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "#87B8F0")
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "#A1C9F2")
          }
        >
         ➕ Add
        </button>
      </form>
    </header>
  );
}

export default Header;
