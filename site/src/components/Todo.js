import React, { useState, useEffect } from 'react';
import './Todo.scss';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt as faClearAll } from '@fortawesome/free-solid-svg-icons';
import Spinner from './Spinner';

//
//
//

export default function Todo() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleItemChange = (item) => {
    const index = items.findIndex((oldItem) => item.id === oldItem.id);
    items[index] = { ...item, isDone: item.isDone, text: item.text };
    setItems((items) => [...items]);
  };

  const handleItemAdd = (text) => {
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
        <TodoInput
          isBusy={isLoading || isAdding}
          buttonText="Add"
          onSubmit={handleItemAdd}
        />
      </section>

      <section>
        {isLoading ? (
          <div>
            <p>Loading tasks...</p>
            <p>
              <Spinner />
            </p>
          </div>
        ) : (
          <div className="double-list-container">
            <TodoList items={items} onChangeItem={handleItemChange} />
            <TodoList items={items} onChangeItem={handleItemChange} />
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
