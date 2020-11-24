import React from 'react';
import './TodoInput.css';

export default function TodoInput({ onClick }) {
  return (
    <div className="TodoInput">
      TodoInput
      <button onClick={onClick}>Add </button>
    </div>
  );
}
