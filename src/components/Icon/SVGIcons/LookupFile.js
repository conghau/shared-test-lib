import React from 'react';
import PropTypes from 'prop-types';

const LookupFile = ({ className, ...rest }) => (
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
        d="M11.1979 8.65243H2.24023V7.63452H11.1979V8.65243Z"
        fill="var(--current-background)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.65286 10.8917H2.3418V9.87378H8.65286V10.8917Z"
        fill="var(--current-background)"
      />
      <circle cx="11.5" cy="14.5" r="3.5" fill="var(--current-background)" />
      <path
        d="M18.0985 19.7546L18.0985 19.7546L15.6244 17.2704C16.2399 16.4519 16.5753 15.4653 16.5753 14.4412C16.5753 11.773 14.3312 9.625 11.6001 9.625C8.86909 9.625 6.625 11.773 6.625 14.4412C6.625 17.1095 8.86909 19.2575 11.6001 19.2575C12.5206 19.2575 13.4046 19.0168 14.1822 18.5566L16.7022 21.087L16.7024 21.0872C16.8883 21.2735 17.138 21.375 17.4003 21.375C17.6488 21.375 17.8883 21.2832 18.0714 21.1131C18.4648 20.7477 18.4781 20.1359 18.0985 19.7546ZM11.6001 11.5336C13.2804 11.5336 14.6253 12.8506 14.6253 14.4412C14.6253 16.0319 13.2804 17.3489 11.6001 17.3489C9.91986 17.3489 8.57504 16.0319 8.57504 14.4412C8.57504 12.8506 9.91986 11.5336 11.6001 11.5336Z"
        stroke="var(--current-background)"
        strokeWidth="0.75"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="19" height="21" fill="var(--current-background)" />
      </clipPath>
    </defs>
  </svg>
);

LookupFile.propTypes = {
  className: PropTypes.string,
};

LookupFile.defaultProps = {
  className: '',
};

export default LookupFile;
