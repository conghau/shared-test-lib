import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...rest} className={className} fill="currentColor" viewBox="0 0 18 22">
    <path d="M7.339 14.464c.444 1.542 1.86 2.707 3.488 2.707 1.156 0 2.011-.311 2.597-.937l-5.213-1.77h-.872zM6.435 5l-4.743.013a.683.683 0 0 0-.692.67v6.634c0 .369.312.67.692.67h4.743V5zm11.181-3.646a.63.63 0 0 0-.26.05L7.82 4.643v8.31l9.505 3.229a.67.67 0 0 0 .29.064.684.684 0 0 0 .693-.67V2.024a.683.683 0 0 0-.692-.67z" />
  </svg>
);

Notification.propTypes = {
  className: PropTypes.string,
};

Notification.defaultProps = {
  className: '',
};

export default Notification;
