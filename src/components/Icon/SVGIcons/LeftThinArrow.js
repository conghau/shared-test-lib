import React from 'react';
import PropTypes from 'prop-types';

const LeftThinArrow = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...rest} className={className} fill="currentColor" viewBox="0 0 8 13">
    <path d="M5.019 6.504L0 11.55 1.536 13l5.743-5.776L8 6.5l-.72-.724L1.535 0 0 1.45 5.02 6.503z" />
  </svg>
);

LeftThinArrow.propTypes = {
  className: PropTypes.string,
};

LeftThinArrow.defaultProps = {
  className: '',
};

export default LeftThinArrow;
