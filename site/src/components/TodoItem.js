import React, { useState } from 'react';
import './TodoItem.css';
import ItemButton from './ItemButton';

export default function TodoItem({ item, onChange }) {
  const [todo, setTodo] = useState(item);

  const toggleIsDone = () => {
    todo.isDone = !todo.isDone;
    updateTodo(todo);
  };

  const editText = () => {
    todo.text = Math.random().toString().substr(-6);
    updateTodo(todo);
  };

  const updateTodo = () => {
    setTodo((todo) => todo);
    onChange(todo);
  };

  const textClassName = todo.isDone ? 'isDone' : 'isNotDone';
  return (
    <li className="TodoItem">
      <span className={textClassName}>{todo.text}</span>
      <ItemButton action="Edit" onClick={editText} />
      <ItemButton action="Delete" />
      <ItemButton action="Toggle" onClick={toggleIsDone} />
    </li>
  );
}
