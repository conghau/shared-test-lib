import React from 'react';
import PropTypes from 'prop-types';

const CalendarClock = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...rest} className={className} fill="currentColor" viewBox="0 0 19 21">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.7324 4H16.8451C17.4285 4 17.9014 4.44772 17.9014 5V17C17.9014 17.5523 17.4285 18 16.8451 18H2.05634C1.47294 18 1 17.5523 1 17V5C1 4.44772 1.47294 4 2.05634 4H4.16901V2H6.28169V4H8.39437V2H10.507V4H12.6197V2H14.7324V4ZM3.1127 16H15.7888V7H3.1127V16Z"
    />
    <path fillRule="evenodd" clipRule="evenodd" d="M12.6196 13H8.39429V9H10.507V11H12.6196V13V13Z" />
  </svg>
);

CalendarClock.propTypes = {
  className: PropTypes.string,
};

CalendarClock.defaultProps = {
  className: '',
};

export default CalendarClock;
