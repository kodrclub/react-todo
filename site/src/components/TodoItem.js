import React from 'react';
import './TodoItem.scss';
import TodoInput from './TodoInput';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Spinner from './Spinner';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrashAlt as faDelete,
  faPencilAlt as faEdit,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCheckSquare as faIsDone,
  faSquare as faIsNotDone,
} from '@fortawesome/free-regular-svg-icons';

//
//
//

export default function TodoItem({ item, isUpdatingItem, onChange }) {
  const handleTextUpdate = (t) => {
    item.text = t;
    onChange(item);
  };

  // For historical purposes, instead of actually deleting items
  // we'll just mark them as such by adding a timestamp to the isDeleted prop
  const markAsDeleted = () => {
    if (window.confirm(`Delete "${item.text}". Are you sure?`)) {
      item.isDeleted = Date();
      onChange(item);
    }
  };

  const toggleIsDone = () => {
    item.isDone = !item.isDone;
    console.log('>>> ítem');
    onChange(item);
  };

  const isUpdating = item.id === isUpdatingItem;

  const TodoItemClassName = `TodoItem  ${isUpdating ? ' isUpdating' : ''}`;
  const textClassName = item.isDone ? 'isDone' : 'isNotDone';

  return (
    <li className={TodoItemClassName}>
      <button onClick={toggleIsDone}>
        {item.isDone ? (
          <FontAwesomeIcon icon={faIsDone} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faIsNotDone} size="2x" />
        )}
      </button>

      <span className={textClassName}>{item.text}</span>

      <span className="spinner">
        <Spinner size="m" />
      </span>

      <Popup
        modal
        className="edit-modal" //will result in .edit-modal-overlay and .edit-modal-content classnames
        trigger={
          <button disabled={item.isDone}>
            <FontAwesomeIcon icon={faEdit} size="lg" />
          </button>
        }
      >
        {(close) => (
          <TodoInput
            value={item.text}
            buttonText="Update"
            onSubmit={(t) => {
              handleTextUpdate(t);
              close();
            }}
            onCancel={() => {
              close();
            }}
          />
        )}
      </Popup>

      <button onClick={markAsDeleted}>
        <FontAwesomeIcon icon={faDelete} size="lg" />
      </button>
    </li>
  );
}
