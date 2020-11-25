import React from 'react';
import './TodoItem.css';
import ItemButton from './ItemButton';

export default function TodoItem({ item, onChange }) {
  const editText = () => {
    item.text = Math.random().toString().substr(-6);
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
      <span className={textClassName}>{item.text}</span>
      <ItemButton action="Edit" onClick={editText} isDisabled={item.isDone} />
      <ItemButton action="Delete" onClick={markAsDeleted} />
      <ItemButton action="Toggle" onClick={toggleIsDone} />
    </li>
  );
}
