import React, { useState } from 'react';
import './Todo.css';

import TodoClear from './TodoClear';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function Todo() {
  const [items, setItems] = useState([
    { id: 1, text: 'item A', isDone: false },
    { id: 2, text: 'item B', isDone: true },
    { id: 3, text: 'item C', isDone: false },
  ]);

  return (
    <div className="Todo">
      <h1>Todo</h1>
      <TodoInput />
      <div className="foo">
        <TodoList items={items} setItems={setItems} />
        <TodoList items={items} setItems={setItems} />
      </div>
      <TodoClear />
    </div>
  );
}
