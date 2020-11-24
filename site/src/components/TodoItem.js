import React from 'react';
import './TodoItem.css';
import ItemButton from './ItemButton';

export default function TodoItem({ item }) {
  const textClassName = item.isDone ? 'isDone' : 'isNotDone';
  return (
    <li className="TodoItem">
      <span className={textClassName}>{item.text}</span>

      <ItemButton action="Edit" />
      <ItemButton action="Delete" />
      <ItemButton action="Toggle" />
    </li>
  );
}
