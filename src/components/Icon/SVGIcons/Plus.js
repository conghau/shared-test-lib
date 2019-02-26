import React from 'react';
import PropTypes from 'prop-types';

const Plus = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
    className={className}
    fill="currentColor"
    stroke="currentColor"
    viewBox="0 0 22 22"
  >
    <path d="M10.375.5h-.5v21h2.25V.5h-1.75z" />
    <path d="M21.5 10.375v-.5H.5v2.25h21v-1.75z" />
  </svg>
);

Plus.propTypes = {
  className: PropTypes.string,
};

Plus.defaultProps = {
  className: '',
};

export default Plus;
