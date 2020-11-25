import React from 'react';
import './TodoItem.css';
import ItemButton from './ItemButton';
import TodoInput from './TodoInput';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function TodoItem({ item, onChange }) {
  const editText = () => {
    item.text = Math.random().toString().substr(-6);
    onChange(item);
  };

  const didEditText = (t) => {
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
      <ItemButton action="Toggle" onClick={toggleIsDone} />

      <span className={textClassName}>{item.text}</span>

      {/* <ItemButton action="Edit" onClick={editText} isDisabled={item.isDone} /> */}
      {/* ////////////////////////////////////////////////////////////////////////////////// */}
      <Popup
        modal
        className="EditModal"
        trigger={<ItemButton action="Edit" isDisabled={item.isDone} />}
      >
        {(close) => (
          <TodoInput
            initVal={item.text}
            buttonText="OK"
            onClick={(t) => {
              didEditText(t);
              close();
            }}
          />
        )}
      </Popup>
      {/* ////////////////////////////////////////////////////////////////////////////////// */}

      <ItemButton action="Delete" onClick={markAsDeleted} />
    </li>
  );
}
