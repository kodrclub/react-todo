import React from 'react';
import './TodoList.css';
// import TodoItem from './TodoItem';

export default function TodoList({ items, setItems }) {
  const contents =
    0 === items.length ? (
      'Nothing to do. Yay!'
    ) : (
      <ul>
        {items.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    );

  return <div className="TodoList">{contents}</div>;
}
