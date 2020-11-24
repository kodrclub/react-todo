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
    // Try to find at least an item that's not marked as deleted.
    // If none are found, consider the list empty
    -1 === items.findIndex((item) => !item.isDeleted) ? (
      'Nothing to do. Yay!'
    ) : (
      <ul>
        {items
          .map((item, index) => {
            //items marked as deleted should be ignored
            if (item.isDeleted) {
              return '';
            }
            return (
              <TodoItem key={index} item={item} onChange={itemDidChange} />
            );
          })
          .reverse()}
      </ul>
    );

  return <div className="TodoList">{contents}</div>;
}
