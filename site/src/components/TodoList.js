import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

export default function TodoList() {
  return (
    <div className="TodoList">
      <h2>TodoList</h2>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}
