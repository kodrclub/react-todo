import React, { useState } from 'react';
import './Todo.scss';

// import TodoClear from './TodoClear';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt as faClearAll } from '@fortawesome/free-solid-svg-icons';

export default function Todo() {
  const [items, setItems] = useState([
    { id: 1, text: 'item A', isDone: false },
    { id: 2, text: 'item B', isDone: true },
    { id: 3, text: 'item C', isDone: false },
  ]);

  const itemsDidChange = (items) => {
    setItems((items) => [...items]);
  };

  const handleAddItem = (text) => {
    const id = Math.random();
    const isDone = false;
    const newItem = {
      id,
      text,
      isDone,
    };
    setItems((items) => [...items, newItem]);
  };

  const didClickClearItems = () => {
    if (window.confirm('Clear all items. Are you sure?')) {
      // Every item that's already marked as deleted is left as is
      // Every other item gets marked as deleted as of this moment
      const allClear = items.map((item) => {
        if (!item.isDeleted) {
          item.isDeleted = Date();
        }
        return item;
      });
      setItems((items) => allClear);
    }
  };

  return (
    <div className="Todo">
      <h1>To Do</h1>

      <section>
        <TodoInput buttonText="Add" onSubmit={handleAddItem} />
      </section>

      <section>
        <div className="double-list-container">
          <TodoList items={items} onChange={itemsDidChange} />
          <TodoList items={items} onChange={itemsDidChange} />
        </div>
      </section>

      <section>
        <button className="clearAll" onClick={didClickClearItems}>
          <FontAwesomeIcon icon={faClearAll} />
          <span>Clear all</span>
          <FontAwesomeIcon icon={faClearAll} />
        </button>
      </section>
    </div>
  );
}
