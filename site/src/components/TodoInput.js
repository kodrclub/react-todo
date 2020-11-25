import React from 'react';
import './TodoInput.css';

export default function TodoInput({ onClick }) {
  return (
    <form className="TodoInput">
      <input type="text" />
      <button onClick={onClick}>Add </button>
    </form>
  );
}
