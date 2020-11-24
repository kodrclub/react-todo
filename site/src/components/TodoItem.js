import React, { useState } from 'react';
import './TodoItem.css';
import ItemButton from './ItemButton';

export default function TodoItem({ item, onChange }) {
  const [isDone, setIsDone] = useState(item.isDone);
  const [text, setText] = useState(item.text);

  const toggleIsDone = () => {
    setIsDone(!isDone);
    item.isDone = isDone;
    onChange(item);
  };

  const editText = () => {
    setText(text + '*');
    item.text = text;
    onChange(item);
  };

  const textClassName = isDone ? 'isDone' : 'isNotDone';
  return (
    <li className="TodoItem">
      <span className={textClassName}>{item.text}</span>
      <ItemButton action="Edit" onClick={editText} />
      <ItemButton action="Delete" />
      <ItemButton action="Toggle" onClick={toggleIsDone} />
    </li>
  );
}
