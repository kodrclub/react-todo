import React, { useState } from 'react';
import './TodoItem.css';
import ItemButton from './ItemButton';

export default function TodoItem({ item }) {
  const [isDone, setIsDone] = useState(item.isDone);

  const toggleDone = () => {
    setIsDone(!isDone);
  };

  const textClassName = isDone ? 'isDone' : 'isNotDone';
  return (
    <li className="TodoItem">
      <span className={textClassName}>{item.text}</span>

      <ItemButton action="Edit" />
      <ItemButton action="Delete" />
      <ItemButton action="Toggle" onClick={toggleDone} />
    </li>
  );
}
