import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...rest} className={className} fill="currentColor" viewBox="0 0 19 21">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.7324 19.025C16.3662 19.025 16.7887 18.625 16.7887 18.025V9.025C16.7887 8.725 16.6831 8.425 16.3662 8.225L10.0282 3.225C9.60563 2.925 9.07747 2.925 8.65493 3.225L2.3169 8.225C2.10563 8.425 2 8.725 2 9.025V18.025C2 18.625 2.42254 19.025 3.05634 19.025H7.28169V14.025H11.507V19.025H15.7324Z"
    />
  </svg>
);

Home.propTypes = {
  className: PropTypes.string,
};

Home.defaultProps = {
  className: '',
};

export default Home;
