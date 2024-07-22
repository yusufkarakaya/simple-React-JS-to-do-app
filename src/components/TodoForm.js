// TodoForm.js
import React from 'react';

function TodoForm({ handleSubmit, handleChange, inputText, editMode }) {
  return (
    <form onSubmit={handleSubmit}>
      <button className='submit-btn' type="submit">{editMode ? "Edit ToDo" : "Add ToDo"}</button>
      <input
      onChange={handleChange}
      value={inputText}
      className='input-text'
      type="text"
      placeholder="Add Todo"
    />
  </form>
  );
}

export default TodoForm;
