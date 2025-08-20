import React, { useState } from "react";

function ToDoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && newText.trim()) {
      editTodo(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div
      className="d-flex justify-content-between align-items-center p-2 mb-2 rounded shadow-sm"
      style={{
        backgroundColor: "#E5E5EA",
        transition: "background-color 0.3s ease",
      }}
      onMouseOver={(e) =>
        (e.currentTarget.style.backgroundColor = "#F7DC6F")
      }
      onMouseOut={(e) =>
        (e.currentTarget.style.backgroundColor = "#E5E5EA")
      }
    >
      {isEditing ? (
        <input
          type="text"
          className="form-control me-2"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span
          onClick={() => toggleComplete(todo.id)}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {todo.text}
        </span>
      )}

      <div>
        <button
          className="btn btn-sm me-2"
          style={{ backgroundColor: "#A1C9F2", color: "white" }}
          onClick={handleEdit}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "#87B8F0")
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "#A1C9F2")
          }
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          className="btn btn-sm"
          style={{ backgroundColor: "#FFC5C5", color: "white" }}
          onClick={() => deleteTodo(todo.id)}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = "#FF9B9B")
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = "#FFC5C5")
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
