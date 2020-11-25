import React from 'react';
import './TodoItem.scss';
import TodoInput from './TodoInput';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function TodoItem({ item, onChange }) {
  // const editText = () => {
  //   item.text = Math.random().toString().substr(-6);
  //   onChange(item);
  // };

  const handleUpdateText = (t) => {
    item.text = t;
    onChange(item);
  };

  // For historical purposes, instead of actually deleting items
  // we'll just mark them as such by adding a timestamp to the isDeleted prop
  const markAsDeleted = () => {
    if (window.confirm(`Delete "${item.text}". Are you sure?`)) {
      item.isDeleted = Date();
      onChange(item);
    }
  };

  const toggleIsDone = () => {
    item.isDone = !item.isDone;
    onChange(item);
  };

  const textClassName = item.isDone ? 'isDone' : 'isNotDone';

  return (
    <li className="TodoItem">
      <button onClick={toggleIsDone}>Toggle</button>

      <span className={textClassName}>{item.text}</span>

      <Popup
        modal
        className="EditModal"
        trigger={<button disabled={item.isDone}>Edit</button>}
      >
        {(close) => (
          <TodoInput
            value={item.text}
            buttonText="Update"
            onSubmit={(t) => {
              handleUpdateText(t);
              close();
            }}
            onCancel={() => {
              close();
            }}
          />
        )}
      </Popup>

      <button onClick={markAsDeleted}>Delete</button>
    </li>
  );
}
