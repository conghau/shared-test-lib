import React from 'react';
import PropTypes from 'prop-types';

const Volume = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...rest} className={className} fill="currentColor" viewBox="0 0 12 11">
    <path d="M7.048.029c-.077-.053-.18-.027-.257.026l-4.039 3.09H.257c-.154 0-.257.104-.257.261v4.19c0 .157.103.262.257.262h2.495l4.039 3.09a.361.361 0 0 0 .154.052c.052 0 .078 0 .103-.026.077-.053.155-.131.155-.236V.264c0-.105-.052-.183-.155-.235zM8.593 3.459a.256.256 0 0 0 0 .366c.9.917.9 2.41 0 3.326a.256.256 0 0 0 0 .366.275.275 0 0 0 .18.079.275.275 0 0 0 .18-.079 2.93 2.93 0 0 0 0-4.084.272.272 0 0 0-.36.026z" />
    <path d="M10.032 1.992a.256.256 0 0 0 0 .367c1.698 1.728 1.698 4.556 0 6.284a.256.256 0 0 0 0 .367.276.276 0 0 0 .18.079.275.275 0 0 0 .18-.079c1.904-1.938 1.904-5.106 0-7.044a.272.272 0 0 0-.36.026z" />
  </svg>
);

Volume.propTypes = {
  className: PropTypes.string,
};

Volume.defaultProps = {
  className: '',
};

export default Volume;
