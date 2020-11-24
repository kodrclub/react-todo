import React from 'react';
import './ItemButton.css';

export default function ItemButton({ action, isDisabled, onClick }) {
  return (
    <button disabled={isDisabled} className="ItemButton" onClick={onClick}>
      {action}
    </button>
  );
}
