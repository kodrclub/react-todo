import React, { useEffect, useState } from 'react';
import './TodoInput.css';

export default function TodoInput({ initVal, buttonText, onClick }) {
  const [value, setValue] = useState(initVal);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    console.log('hc');
    validate(newValue);
    setValue((value) => newValue);
  };

  const validate = (value) => {
    /*
    g - flag: don't stop at the first match
    i - flag: ignore case
    ^ - from the beginning of the string...
    $ - ...to the end of the string
    + - the string needs to contain one or more...
    [a-z0-9 ] - ...of these characters:
    - characters from a to z (or A to Z since we are using the i flag to ignore case)
    - characters from 0 to 9
    - spaces
    */
    const regex = /^[a-z0-9 ]+$/gi;
    const newIsValid = value.match(regex);
    console.log(value.match(regex));

    setIsValid((isValid) => newIsValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClick(value);
    setValue((value) => '');
    setIsValid((isValid) => false);
  };

  useEffect(() => {
    validate(initVal || '');
  }, []);

  return (
    <form onSubmit={handleSubmit} className="TodoInput">
      <input
        value={value}
        className={!isValid ? 'invalid' : ''}
        onChange={handleChange}
        type="text"
      />
      <input type="submit" disabled={!isValid} value={buttonText || 'Add'} />
    </form>
  );
}
