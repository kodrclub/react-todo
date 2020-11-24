import React, { useState } from 'react';
import './Todo.css';

// import TodoClear from './TodoClear';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function Todo() {
  const [items, setItems] = useState([
    { id: 1, text: 'item A', isDone: false },
    { id: 2, text: 'item B', isDone: true },
    { id: 3, text: 'item C', isDone: false },
  ]);

  const itemsDidChange = (items) => {
    setItems((items) => [...items]);
  };

  const didClickAddItem = () => {
    const id = Math.random();
    const newItem = {
      id: id,
      text: id.toString().substr(-6),
      isDone: false,
    };
    setItems((items) => [...items, newItem]);
  };

  const didClickClearItems = () => {
    if (window.confirm('Clear all items. Are you sure?')) {
      setItems([]);
    }
  };

  return (
    <div className="Todo">
      <h1>Todo</h1>
      <TodoInput onClick={didClickAddItem} />
      <div className="foo">
        <TodoList items={items} onChange={itemsDidChange} />
        <TodoList items={items} onChange={itemsDidChange} />
      </div>
      <button onClick={didClickClearItems}>Clear all</button>
    </div>
  );
}
