import React from 'react';
import PropTypes from 'prop-types';

const Mail = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...rest} className={className} fill="currentColor" viewBox="0 0 19 15">
    <path d="M18.75 1.324c0-.62-.5-1.116-1.125-1.116H1.375C.75.208.25.704.25 1.324v.149l8.8 6.175a.757.757 0 0 0 .875.025l8.825-6.2v-.149z" />
    <path d="M8.45 8.442L.25 2.688v10.789c0 .62.5 1.116 1.125 1.116h16.25c.625 0 1.125-.497 1.125-1.116V2.688l-8.225 5.754c-.3.223-.65.347-1.025.347a1.67 1.67 0 0 1-1.05-.347z" />
  </svg>
);

Mail.propTypes = {
  className: PropTypes.string,
};

Mail.defaultProps = {
  className: '',
};

export default Mail;
