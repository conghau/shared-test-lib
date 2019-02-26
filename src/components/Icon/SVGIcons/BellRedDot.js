import React from 'react';
import PropTypes from 'prop-types';

const BellRedDot = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...rest} className={className} fill="currentColor" viewBox="0 0 19 21">
    <g clipPath="url(#clip0)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9279 10.6719V9.41633C13.9279 6.6426 11.6794 4.39404 8.90564 4.39404C6.13191 4.39404 3.88336 6.6426 3.88336 9.41633V10.6719C3.85219 11.446 3.50034 12.1722 2.91217 12.6764C2.38935 13.1219 2.06189 13.7545 2 14.4386C2 16.0081 4.58146 16.9498 8.90564 16.9498C13.2298 16.9498 15.8113 16.0081 15.8113 14.4386C15.7494 13.7545 15.4219 13.1219 14.8991 12.6764C14.3109 12.1722 13.9591 11.446 13.9279 10.6719V10.6719Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.11328 18.1426C7.35885 18.9259 8.08468 19.459 8.90561 19.459C9.72654 19.459 10.4524 18.9259 10.6979 18.1426C10.1367 18.184 9.5403 18.2054 8.90561 18.2054C8.27092 18.2054 7.67452 18.1853 7.11328 18.1426Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6146 9.41679C16.215 9.41679 18.323 7.30877 18.323 4.70839C18.323 2.10802 16.215 0 13.6146 0C11.0143 0 8.90625 2.10802 8.90625 4.70839C8.90625 7.30877 11.0143 9.41679 13.6146 9.41679Z"
        fill="#D14242"
        visibility="visible"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="19" height="21" fill="var(--current-background)" />
      </clipPath>
    </defs>
  </svg>
);

BellRedDot.propTypes = {
  className: PropTypes.string,
};

BellRedDot.defaultProps = {
  className: '',
};

export default BellRedDot;
