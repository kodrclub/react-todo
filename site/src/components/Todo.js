import React, { useState } from 'react';
import './Todo.css';

import TodoClear from './TodoClear';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function Todo() {
  const [items, setItems] = useState([
    { text: 'item A', isDone: false },
    { text: 'item B', isDone: true },
    { text: 'item C', isDone: false },
  ]);

  return (
    <div className="Todo">
      <h1>Todo</h1>
      <TodoInput />
      <TodoList items={items} setItems={setItems} />
      <TodoClear />
    </div>
  );
}
