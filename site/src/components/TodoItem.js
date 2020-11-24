import React from 'react';
import './TodoItem.css';
import ItemEdit from './ItemEdit';
import ItemDelete from './ItemDelete';
import ItemMarkDone from './ItemMarkDone';

export default function TodoItem() {
  return (
    <div className="TodoItem">
      TodoItem
      <ItemEdit />
      <ItemDelete />
      <ItemMarkDone />
    </div>
  );
}
