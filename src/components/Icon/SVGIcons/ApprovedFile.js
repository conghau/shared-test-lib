import React from 'react';
import PropTypes from 'prop-types';

const ApprovedFile = ({ className, ...rest }) => (
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
        d="M18.1431 12.6005L10.6746 20.4999L6.50391 16.4837L7.61084 15.3342L10.6214 18.2332L16.9835 11.5042L18.1431 12.6005Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.6474 12.5582L10.7104 22.0108L5 16.5119L7.58285 13.8297L10.5864 16.722L16.9417 10L19.6474 12.5582ZM16.9839 11.504L18.1435 12.6003L10.675 20.4997L6.5043 16.4835L7.61123 15.334L10.6218 18.2331L16.9839 11.504Z"
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
        d="M8.65286 10.8917H2.3418V9.87378H8.65286V10.8917Z"
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

ApprovedFile.propTypes = {
  className: PropTypes.string,
};

ApprovedFile.defaultProps = {
  className: '',
};

export default ApprovedFile;
