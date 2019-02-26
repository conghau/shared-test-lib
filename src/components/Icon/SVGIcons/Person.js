import React from 'react';
import PropTypes from 'prop-types';

const Person = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...rest} className={className} fill="currentColor" viewBox="0 0 19 21">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5297 16.3459C16.5297 16.5942 16.3279 16.8 16.079 16.8H2.45078C2.2054 16.8 2 16.5967 2 16.3459C2 12.3337 5.25259 9.08108 9.26487 9.08108C13.2771 9.08108 16.5297 12.3337 16.5297 16.3459ZM9.26487 8.17297C7.00796 8.17297 5.17838 6.34339 5.17838 4.08649C5.17838 1.82958 7.00796 0 9.26487 0C11.5218 0 13.3514 1.82958 13.3514 4.08649C13.3514 6.34339 11.5218 8.17297 9.26487 8.17297Z"
    />
  </svg>
);

Person.propTypes = {
  className: PropTypes.string,
};

Person.defaultProps = {
  className: '',
};

export default Person;
