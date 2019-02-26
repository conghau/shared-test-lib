import React from 'react';
import PropTypes from 'prop-types';

const Close = ({ className, ...rest }) => (
  <svg {...rest} className={className} fill="currentColor" stroke="currentColor" viewBox="0 0 13 13">
    <path
      strokeWidth=".25"
      d="M11.784.271l-.09-.09-.091.09L6.5 5.375 1.396.27l-.09-.09-.09.09-.945.945-.09.09.09.09L5.375 6.5.27 11.603l-.09.09.09.09.945.945.09.09.09-.09L6.5 7.625l5.103 5.103.09.09.09-.09.945-.944.09-.09-.09-.091-5.106-5.106.132-.135c.14-.143.343-.346.586-.59a2766.924 2766.924 0 0 1 3.575-3.566l.59-.587.164-.164.044-.043.011-.012.003-.002v-.001l-.09-.091.09.09.092-.09-.09-.09-.945-.945z"
    />
  </svg>
);

Close.propTypes = {
  className: PropTypes.string,
};

Close.defaultProps = {
  className: '',
};

export default Close;
