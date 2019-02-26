import React from 'react';
import PropTypes from 'prop-types';

const Check = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...rest} className={className} fill="currentColor" viewBox="0 0 11 9">
    <path
      fillRule="evenodd"
      d="M11 1.195L9.805 0 3.652 6.152 1.195 3.696 0 4.89l3.587 3.587.174-.174.065.065L11 1.195z"
      clipRule="evenodd"
    />
  </svg>
);

Check.propTypes = {
  className: PropTypes.string,
};

Check.defaultProps = {
  className: '',
};

export default Check;
