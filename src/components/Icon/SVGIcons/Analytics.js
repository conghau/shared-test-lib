import React from 'react';
import PropTypes from 'prop-types';

const Analytics = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...rest} className={className} fill="currentColor" viewBox="0 0 19 21">
    <rect x="2" y="5" width="2.11268" height="13" />
    <rect x="6.22534" y="10" width="2.11268" height="8" />
    <rect x="10.4507" y="8" width="2.11268" height="10" />
    <rect x="14.676" y="13" width="2.11268" height="5" />
  </svg>
);

Analytics.propTypes = {
  className: PropTypes.string,
};

Analytics.defaultProps = {
  className: '',
};

export default Analytics;
