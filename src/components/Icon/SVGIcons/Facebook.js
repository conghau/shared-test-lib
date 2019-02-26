import React from 'react';
import PropTypes from 'prop-types';

const Facebook = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...rest} className={className} fill="currentColor" viewBox="0 0 19 20">
    <g clipPath="url(#a)">
      <path d="M13.691.004L11.324 0c-2.66 0-4.379 1.932-4.379 4.922v2.27h-2.38c-.206 0-.372.182-.372.407v3.288c0 .226.167.408.372.408h2.38v8.297c0 .226.167.408.373.408h3.105c.206 0 .373-.183.373-.408v-8.297h2.783c.205 0 .372-.182.372-.408l.001-3.288a.43.43 0 0 0-.109-.288.357.357 0 0 0-.263-.12h-2.784V5.268c0-.925.2-1.394 1.3-1.394l1.595-.001c.205 0 .372-.183.372-.408V.412c0-.225-.166-.407-.372-.408z" />
    </g>
  </svg>
);

Facebook.propTypes = {
  className: PropTypes.string,
};

Facebook.defaultProps = {
  className: '',
};

export default Facebook;
