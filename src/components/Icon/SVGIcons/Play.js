import React from 'react';
import PropTypes from 'prop-types';

const Play = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...rest} className={className} fill="currentColor" viewBox="0 0 12 16">
    <path d="M11.82 8c0-.327-.156-.633-.42-.82l-9.85-7A.976.976 0 0 0 .53.112C.204.285 0 .626 0 1v14.002c0 .373.204.715.53.887.326.17.719.146 1.02-.068l9.85-7A1 1 0 0 0 11.82 8V8z" />
  </svg>
);

Play.propTypes = {
  className: PropTypes.string,
};

Play.defaultProps = {
  className: '',
};

export default Play;
