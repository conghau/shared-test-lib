import React from 'react';
import PropTypes from 'prop-types';

const EcoSystem = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...rest} className={className} fill="currentColor" viewBox="0 0 19 12">
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="-5" width="19" height="21">
      <rect y="-5" width="19" height="21" />
    </mask>
    <g mask="url(#mask0)">
      <circle cx="2.5" cy="3.5" r="2.5" />
      <circle cx="17" cy="2" r="2" />
      <circle cx="12" cy="10" r="2" />
      <rect x="14.9702" y="4" width="0.83118" height="3.69252" transform="rotate(32.2478 14.9702 4)" />
      <rect x="10.1482" y="8.06055" width="0.83118" height="5.30796" transform="rotate(122.132 10.1482 8.06055)" />
    </g>
  </svg>
);

EcoSystem.propTypes = {
  className: PropTypes.string,
};

EcoSystem.defaultProps = {
  className: '',
};

export default EcoSystem;
