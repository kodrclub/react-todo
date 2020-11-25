import React, { useEffect, useState } from 'react';
import './TodoInput.scss';

export default function TodoInput({ value, buttonText, onSubmit, onCancel }) {
  const [text, setText] = useState(value || '');
  const [isValid, setIsValid] = useState(false);

  const canSubmit = typeof onSubmit === 'function';
  const canCancel = typeof onCancel === 'function';

  const handleChange = (e) => {
    const newText = e.target.value;
    validate(newText);
    setText((text) => newText);
  };

  const validate = (text) => {
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
    const newIsValid = text.match(regex);

    setIsValid((isValid) => newIsValid);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    if (canCancel) {
      onCancel();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSubmit) {
      onSubmit(text);
    }
    setText((text) => '');
    setIsValid((isValid) => false);
  };

  //
  //-------
  //

  useEffect(() => {
    validate(text);
  }, [text]);

  //only show the cancel button if an onCancel function is passed
  const CancelButton = () => {
    return canCancel ? (
      <button className="cancel" onClick={handleCancel}>
        Cancel
      </button>
    ) : (
      ''
    );
  };

  return (
    <form onSubmit={handleSubmit} className="TodoInput">
      <input
        value={text}
        className={!isValid ? 'invalid' : ''}
        onChange={handleChange}
        type="text"
      />
      <input type="submit" disabled={!isValid} value={buttonText || 'OK'} />
      <CancelButton />
    </form>
  );
}
