import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

export default function TodoList({ items, onChange }) {
  const itemDidChange = (item) => {
    const index = items.findIndex((oldItem) => item.id === oldItem.id);
    items[index] = { ...item, isDone: item.isDone, text: item.text };
    onChange(items);
  };

  const contents =
    0 === items.length ? (
      'Nothing to do. Yay!'
    ) : (
      <ul>
        {items.map((item, index) => {
          return <TodoItem key={index} item={item} onChange={itemDidChange} />;
        })}
      </ul>
    );

  return <div className="TodoList">{contents}</div>;
}
