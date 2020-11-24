import React from 'react';
import './Todo.css';

import TodoClear from './TodoClear';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function Todo() {
  return (
    <div className="Todo">
      <h1>Todo</h1>
      <TodoInput />
      <TodoList />
      <TodoClear />
    </div>
  );
}
