import React, { useState } from 'react';
import './TodoInput.css';

export default function TodoInput({ onClick }) {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    validate(newValue);
    setValue((value) => newValue);
  };

  const validate = (value) => {
    const newIsValid = 0 < value.length;
    setIsValid((isValid) => newIsValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClick(value);
    setValue((value) => '');
    setIsValid((isValid) => false);
  };

  return (
    <form onSubmit={handleSubmit} className="TodoInput">
      <input value={value} onChange={handleChange} type="text" />
      <input type="submit" disabled={!isValid} value="Add" />
    </form>
  );
}
