import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {
  return (
    <div>
      <h1>TodoList</h1>
      <TodoForm />
      <Todo />
    </div>
  );
};

export default TodoList;
