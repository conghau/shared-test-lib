import React from 'react';
import PropTypes from 'prop-types';

const Recorder = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 15 21" className={className} {...rest}>
    <rect width="11" height="16" x="2.237" y="1" fill="currentColor" rx="4.5" />
    <path
      fill="#fff"
      d="M6.923 18h1.625c3.17 0 5.688-2.325 5.688-5.25v-7.5c0-2.925-2.519-5.25-5.688-5.25H6.923C3.755 0 1.236 2.325 1.236 5.25v7.5c0 2.925 2.519 5.25 5.687 5.25zm-.812-6.75H2.86v-1.5h2.437c.488 0 .813-.3.813-.75s-.325-.75-.813-.75H2.861v-1.5h3.25c.487 0 .812-.3.812-.75s-.325-.75-.812-.75H2.86c0-2.1 1.787-3.75 4.062-3.75h1.625c2.275 0 4.063 1.65 4.063 3.75H9.36c-.488 0-.813.3-.813.75s.325.75.813.75h3.25v1.5h-2.438c-.487 0-.812.3-.812.75s.325.75.812.75h2.438v1.5H9.36c-.488 0-.813.3-.813.75s.325.75.813.75h3.25c0 2.1-1.788 3.75-4.063 3.75V15c0-.45-.325-.75-.812-.75-.488 0-.813.3-.813.75v1.5c-2.275 0-4.062-1.65-4.062-3.75h3.25c.487 0 .812-.3.812-.75s-.325-.75-.812-.75z"
    />
    <path
      fill="currentColor"
      d="M14.206 11.118c-.37 0-.618.208-.618.52v1.04c0 2.86-2.78 5.201-6.176 5.201-3.397 0-6.177-2.34-6.177-5.201v-1.04c0-.312-.247-.52-.617-.52s-.618.208-.618.52v1.04c0 3.277 3.026 5.93 6.794 6.19v1.092H4.941c-.37 0-.617.208-.617.52 0 .312.247.52.617.52h4.941c.371 0 .618-.208.618-.52 0-.312-.247-.52-.618-.52H8.03v-1.093c3.768-.26 6.795-2.964 6.795-6.189v-1.04c0-.312-.247-.52-.618-.52z"
    />
  </svg>
);

Recorder.propTypes = {
  className: PropTypes.string,
};

Recorder.defaultProps = {
  className: '',
};

export default Recorder;
