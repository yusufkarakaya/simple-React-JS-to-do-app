// TodoItem.js
import React from 'react';

function TodoItem({ todo, handleEdit, deleteTodo }) {
  return (
    <div className="todo">
      <p>{todo.text}</p>
      <div className="actions">
        <button onClick={() => handleEdit(todo.id, todo.text)} className="edit-btn">Edit</button>
        <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
      </div>
  </div>
  );
}

export default TodoItem;
