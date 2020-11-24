import React, { useState } from 'react';
import './Todo.css';

import TodoClear from './TodoClear';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function Todo() {
  const [items, setItems] = useState(['item A', 'item B', 'item C']);

  return (
    <div className="Todo">
      <h1>Todo</h1>
      <TodoInput />
      <TodoList items={items} setItems={setItems} />
      <TodoClear />
    </div>
  );
}
