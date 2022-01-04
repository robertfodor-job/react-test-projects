import React, { useState, useRef } from 'react';

const TodoForm = () => {
  const [input, setInput] = useState('');

  const inputRef = useRef('');

  const handleSubmit = e => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  return (
    <div>
      <h1>ToDoForm</h1>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="Add Item"
          ref={inputRef}
        />
        <button className="todo-button" onClick={handleSubmit}>
          Add Item
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
