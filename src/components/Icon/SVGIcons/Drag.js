import React from 'react';
import PropTypes from 'prop-types';

const Drag = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
    className={className}
    fill="currentColor"
    stroke="currentColor"
    viewBox="0 0 8 8"
  >
    <circle cx="1.5" cy="1.5" r="1.5" />
    <circle cx="6.5" cy="1.5" r="1.5" />
    <circle cx="1.5" cy="6.5" r="1.5" />
    <circle cx="6.5" cy="6.5" r="1.5" />
  </svg>
);

Drag.propTypes = {
  className: PropTypes.string,
};

Drag.defaultProps = {
  className: '',
};

export default Drag;
