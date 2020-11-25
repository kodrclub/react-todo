import React, { useState } from 'react';
import './TodoInput.css';

export default function TodoInput({ onClick }) {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const valueDidChange = (e) => {
    const newValue = e.target.value;
    validate(newValue);
    setValue((value) => newValue);
  };

  const validate = (value) => {
    const newIsValid = 0 < value.length;
    setIsValid((isValid) => newIsValid);
  };

  const willSubmit = () => {
    onClick(value);
  };

  return (
    <form className="TodoInput">
      <input onChange={valueDidChange} type="text" />
      <button disabled={!isValid} onClick={willSubmit}>
        Add
      </button>
    </form>
  );
}
