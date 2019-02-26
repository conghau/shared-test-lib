import React from 'react';
import PropTypes from 'prop-types';

const Pause = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} {...rest} fill="currentColor" viewBox="0 0 12 12">
    <path d="M0 0h4v12H0zM8 0h4v12H8z" />
  </svg>
);

Pause.propTypes = {
  className: PropTypes.string,
};

Pause.defaultProps = {
  className: '',
};

export default Pause;
