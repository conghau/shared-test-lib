import React from 'react';
import PropTypes from 'prop-types';

const RejectedFile = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...rest} className={className} fill="currentColor" viewBox="0 0 19 21">
    <g clipPath="url(#clip0)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.34343 0C8.29352 0.000412502 8.24322 0.0100158 8.19508 0.0293576C8.04081 0.0913453 7.93972 0.240904 7.93972 0.407165V5.29315C7.93972 5.51802 8.12202 5.70031 8.34689 5.70031H13.0293C13.1023 5.70031 13.1722 5.68079 13.2329 5.64576V8.44868V14.8615C13.2329 15.9859 12.3214 16.8974 11.197 16.8974H2.03583C0.91147 16.8974 0 15.9859 0 14.8615V2.03583C0 0.91147 0.91147 0 2.03583 0H6.61643H8.34343ZM8.35016 0C8.45789 0.00089019 8.56333 0.0445446 8.64086 0.125445L13.2329 4.91711V4.90803L8.52514 0H8.35016ZM8.75405 4.88598V1.4205L12.0751 4.88598H8.75405Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.002 17.9942L16.0196 21.0118L17.0137 20.0177L13.9961 17.0001L17.0138 13.9824L16.0197 12.9883L13.002 16.006L9.98434 12.9883L8.99023 13.9824L12.0079 17.0001L8.99034 20.0177L9.98444 21.0118L13.002 17.9942Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0176 22.9999L13 19.9823L9.98242 22.9999L7.00011 20.0176L10.0177 17L7 13.9823L9.98231 11L13 14.0177L16.0177 11L19 13.9823L15.9823 17L18.9999 20.0176L16.0176 22.9999ZM13 16.0059L9.98231 12.9882L8.98821 13.9823L12.0059 17L8.98831 20.0176L9.98242 21.0117L13 17.9941L16.0176 21.0117L17.0117 20.0176L13.9941 17L17.0118 13.9823L16.0177 12.9882L13 16.0059Z"
        fill="var(--current-background)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1979 8.65243H2.24023V7.63452H11.1979V8.65243Z"
        fill="var(--current-background)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.65286 10.8914H2.3418V9.87354H8.65286V10.8914Z"
        fill="var(--current-background)"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="19" height="21" fill="var(--current-background)" />
      </clipPath>
    </defs>
  </svg>
);

RejectedFile.propTypes = {
  className: PropTypes.string,
};

RejectedFile.defaultProps = {
  className: '',
};

export default RejectedFile;
