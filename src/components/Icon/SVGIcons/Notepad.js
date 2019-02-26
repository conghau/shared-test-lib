import React from 'react';
import PropTypes from 'prop-types';

const Notepad = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...rest} className={className} fill="currentColor" viewBox="0 0 19 21">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.8451 5H13.6761V7H15.7887V18H3.11268V7H5.22535V5H2.05634C1.42254 5 1 5.4 1 6V19C1 19.6 1.42254 20 2.05634 20H16.8451C17.4789 20 17.9014 19.6 17.9014 19V6C17.9014 5.4 17.4789 5 16.8451 5Z"
    />
    <rect x="6.28174" y="4" width="6.33803" height="4" />
    <rect x="5.22534" y="10" width="8.4507" height="6" />
  </svg>
);

Notepad.propTypes = {
  className: PropTypes.string,
};

Notepad.defaultProps = {
  className: '',
};

export default Notepad;
