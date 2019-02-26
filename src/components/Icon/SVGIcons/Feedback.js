import React from 'react';
import PropTypes from 'prop-types';

const Feedback = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...rest} className={className} fill="currentColor" viewBox="0 0 16 19">
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="-1" y="-1" width="19" height="21">
      <rect x="-1" y="-1" width="19" height="21" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0)">
      <path d="M2 19V16H7L2 19Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 0H12V2H14V13H2V2H12V0H1C0.4 0 0 0.4 0 1V14C0 14.6 0.4 15 1 15H15C15.6 15 16 14.6 16 14V1C16 0.4 15.6 0 15 0Z"
      />
      <rect x="4" y="8" width="8" height="2" />
      <rect x="4" y="5" width="8" height="2" />
    </g>
  </svg>
);

Feedback.propTypes = {
  className: PropTypes.string,
};

Feedback.defaultProps = {
  className: '',
};

export default Feedback;
