import React from 'react';
import PropTypes from 'prop-types';

const LogOut = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...rest} className={className} fill="currentColor" viewBox="0 0 21 17">
    <path d="M10.763 7.1H4.987V5.8c0-.26-.174-.347-.262-.347-.175 0-.438.173-.438.173L.262 8.14s-.174.173-.174.26c0 .086 0 .173.175.26.437.26 4.024 2.34 4.2 2.426 0 0 .262.174.437.174.087 0 .35-.087.35-.347V9.786h5.688c.174 0 .437-.086.437-.346V7.446C11.2 7.1 10.85 7.1 10.763 7.1z" />
    <path d="M21 1.293C21 .86 20.912.6 20.3.6H7.262C7.175.6 7 .687 7 .86v3.553c0 .174.175.347.263.347H9.45c.263 0 .263-.087.263-.347V3.2h8.05c.35 0 .612.347.612.693v9.014a.595.595 0 0 1-.612.606H9.625V12.3c0-.173-.175-.26-.263-.26h-2.1c-.087 0-.35 0-.35.26v3.64c.088.26.438.26.438.26h13.125c.35-.087.525-.173.525-.867V1.293z" />
  </svg>
);

LogOut.propTypes = {
  className: PropTypes.string,
};

LogOut.defaultProps = {
  className: '',
};

export default LogOut;
