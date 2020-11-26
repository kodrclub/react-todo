import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Spinner({ size = 'lg' }) {
  return <FontAwesomeIcon icon={faSpinner} size={size} spin />;
}
