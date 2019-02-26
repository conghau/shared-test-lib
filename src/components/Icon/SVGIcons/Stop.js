import React from 'react';
import PropTypes from 'prop-types';

const Stop = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...rest} className={className} fill="currentColor" viewBox="0 0 12 12">
    <path d="M0 0h12v12H0z" />
  </svg>
);

Stop.propTypes = {
  className: PropTypes.string,
};

Stop.defaultProps = {
  className: '',
};

export default Stop;
