import React from 'react';
import './ItemButton.css';

export default function ItemButton({ action }) {
  return <button className="ItemButton">{action}</button>;
}
