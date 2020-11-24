import React from 'react';
import './TodoItem.css';
import ItemButton from './ItemButton';

export default function TodoItem({ item }) {
  return (
    <li className="TodoItem">
      <span className="text">{item.text}</span>
      <ItemButton action="Edit" />
      <ItemButton action="Delete" />
      <ItemButton action="Toggle" />
    </li>
  );
}
