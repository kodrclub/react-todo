import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';

export default function TodoList({ items, onChange }) {
  const itemDidChange = (item) => {
    console.log('item did change ' + item.isDone + ' ' + item.id);
    items.push({ id: Math.random(), text: 'rando', isDone: false });
    onChange(items);
  };

  const contents =
    0 === items.length ? (
      'Nothing to do. Yay!'
    ) : (
      <ul>
        {items.map((item) => {
          return (
            <TodoItem key={item.id} item={item} onChange={itemDidChange} />
          );
        })}
      </ul>
    );

  return <div className="TodoList">{contents}</div>;
}
