import React from 'react';
import './ItemButton.css';

export default function ItemButton({ action, onClick }) {
  return (
    <button className="ItemButton" onClick={onClick}>
      {action}
    </button>
  );
}
