// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, handleEdit, deleteTodo }) {
  return (
    <div className="todos">
    {todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} handleEdit={handleEdit} deleteTodo={deleteTodo} />
    ))}
  </div>
  );
}

export default TodoList;
