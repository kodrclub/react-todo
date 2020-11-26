import React, { useState, useEffect } from 'react';
import './Todo.scss';

import TodoInput from './TodoInput';
import TodoList from './TodoList';
// import Foo from './Foo'; //////////////////////////////////////////////////////////////////////////////////////

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt as faClearAll } from '@fortawesome/free-solid-svg-icons';

export default function Todo() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const itemsDidChange = (items) => {
    setItems((items) => [...items]);
  };

  const handleAddItem = (text) => {
    // const id = Math.random();
    // const isDone = false;
    // const newItem = {
    //   id,
    //   text,
    //   isDone,
    // };
    // setItems((items) => [...items, newItem]);
    const newAttrs = {
      text,
      isDone: false,
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(newAttrs),
    };

    setIsAdding(true);
    fetch('/api/tasks', options)
      .then((res) => res.json())
      .then((json) => {
        setItems((tasks) => [...tasks, json.task]);
      })
      .finally(() => {
        setIsAdding(false);
      });
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

  useEffect(() => {
    setIsLoading(true);
    fetch('/api/tasks')
      .then((res) => res.json())
      .then((json) => {
        setItems(json.tasks);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="Todo">
      <h1>To Do</h1>
      <section>
        {isAdding ? (
          <p>Adding task...</p>
        ) : (
          <TodoInput buttonText="Add" onSubmit={handleAddItem} />
        )}
      </section>

      <section>
        {isLoading ? (
          <p>Loading tasks...</p>
        ) : (
          <div className="double-list-container">
            <TodoList items={items} onChange={itemsDidChange} />
            <TodoList items={items} onChange={itemsDidChange} />
          </div>
        )}
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
