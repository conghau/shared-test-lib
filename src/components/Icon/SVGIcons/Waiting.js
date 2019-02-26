import React from 'react';
import PropTypes from 'prop-types';

const Waiting = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...rest} className={className} fill="currentColor" viewBox="0 0 15 15">
    <path d="M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm0-13.636A6.133 6.133 0 0 1 13.636 7.5 6.133 6.133 0 0 1 7.5 13.636 6.133 6.133 0 0 1 1.364 7.5 6.132 6.132 0 0 1 7.5 1.364z" />
    <path d="M10.056 10.74c.17 0 .341-.069.478-.205a.679.679 0 0 0 0-.972L8.18 7.211V3.58a.684.684 0 0 0-.681-.683.684.684 0 0 0-.682.682v4.193l2.761 2.762a.673.673 0 0 0 .477.204z" />
  </svg>
);

Waiting.propTypes = {
  className: PropTypes.string,
};

Waiting.defaultProps = {
  className: '',
};

export default Waiting;
