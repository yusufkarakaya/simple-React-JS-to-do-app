import './App.css';
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const initialTodos = [
  {
    id: 1,
    text: "Learn React",
  },
  {
    id: 2,
    text: "Learn Redux",
  },
  {
    id: 3,
    text: "Build a project",
  }
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [inputText, setInputText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText) return;

    if (editMode) {
      const updatedTodos = todos.map(todo =>
        todo.id === editId ? { ...todo, text: inputText } : todo
      );
      setTodos(updatedTodos);
      setEditMode(false);
      setEditId(null);
    } else {
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        text: inputText
      };
      setTodos([...todos, newTodo]);
    }

    setInputText("");
  };

  const handleEdit = (id, text) => {
    setEditMode(true);
    setEditId(id);
    setInputText(text);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="main">
      <TodoForm handleSubmit={handleSubmit} handleChange={handleChange} inputText={inputText} editMode={editMode} />
      <TodoList todos={todos} handleEdit={handleEdit} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
