import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-center text-muted">No tasks found</p>
      ) : (
        todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))
      )}
    </div>
  );
}

export default ToDoList;
