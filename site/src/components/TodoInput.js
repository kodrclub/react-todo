import React, { useEffect, useState } from 'react';
import './TodoInput.scss';
import Spinner from './Spinner';

//
//
//

export default function TodoInput({
  value,
  buttonText,
  stacked = false,
  isBusy = false,
  onSubmit,
  onCancel = null,
}) {
  const [text, setText] = useState(value || '');
  const [isValid, setIsValid] = useState(true);

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

    onSubmit(text);

    setText((text) => '');
    setIsValid((isValid) => false);
  };

  //
  //-------
  //

  useEffect(() => {
    validate(text);
  }, [text]);

  const classNames = ['TodoInput', stacked ? 'stacked' : ''].join(' ');

  return (
    <form className={classNames}>
      <input
        value={text}
        className={!isValid ? 'invalid' : ''}
        onChange={handleChange}
        disabled={isBusy}
        type="text"
      />
      <button
        className="submit-button"
        disabled={!isValid || isBusy}
        onClick={handleSubmit}
      >
        {isBusy ? <Spinner /> : buttonText || 'OK'}
      </button>
      {canCancel ? (
        <button className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
      ) : (
        ''
      )}
    </form>
  );
}
