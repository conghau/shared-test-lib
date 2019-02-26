import React from 'react';
import PropTypes from 'prop-types';

const Minus = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
    className={className}
    fill="currentColor"
    stroke="currentColor"
    viewBox="0 0 22 22"
  >
    <path d="M4 11H18" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

Minus.propTypes = {
  className: PropTypes.string,
};

Minus.defaultProps = {
  className: '',
};

export default Minus;
