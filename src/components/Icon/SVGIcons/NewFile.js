import React from 'react';
import PropTypes from 'prop-types';

const NewFile = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" {...rest} className={className} fill="currentColor" viewBox="0 0 19 21">
    <g clipPath="url(#clip0)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.63647 0C8.58479 0.000426989 8.53273 0.0103676 8.4829 0.0303886C8.32321 0.0945535 8.21857 0.249365 8.21857 0.421465V5.47905C8.21857 5.71182 8.40727 5.90051 8.64004 5.90051H13.4869C13.5625 5.90051 13.6348 5.88031 13.6976 5.84405V8.74541V15.3835C13.6976 16.5473 12.7541 17.4908 11.5903 17.4908H2.10733C0.943482 17.4908 0 16.5473 0 15.3835V2.10733C0 0.943482 0.943482 0 2.10733 0H6.84881H8.63647ZM8.64343 0C8.75495 0.000921454 8.86408 0.046109 8.94433 0.129851L13.6976 5.08981V5.0804L8.82455 0H8.64343ZM9.06151 5.05758V1.47039L12.4992 5.05758H9.06151Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5906 8.95625H2.31836V7.90259H11.5906V8.95625Z"
        fill="var(--current-background)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.95654 11.2741H2.42383V10.2205H8.95654V11.2741Z"
        fill="var(--current-background)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.3408 14.9736V10.4963H11.8659V14.9736H7.38867V16.4485H11.8659V20.9257H13.3408V16.4485H17.818V14.9736H13.3408Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.523 9.31616V13.7934H19.0002V17.6282H14.523V22.1054H10.6881V17.6282H6.21094V13.7934H10.6881V9.31616H14.523ZM11.8681 14.9733H7.39089V16.4483H11.8681V20.9255H13.343V16.4483H17.8203V14.9733H13.343V10.4961H11.8681V14.9733Z"
        fill="var(--current-background)"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="19" height="21" fill="var(--current-background)" />
      </clipPath>
    </defs>
  </svg>
);

NewFile.propTypes = {
  className: PropTypes.string,
};

NewFile.defaultProps = {
  className: '',
};

export default NewFile;
