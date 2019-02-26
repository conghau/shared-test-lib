import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as SVGIcons from './SVGIcons';

const Wrapper = styled.i`
  display: inline-block;
  text-align: center;
  line-height: 0;
  vertical-align: -0.125em;

  & > svg {
    --current-background: ${props => props.currentBackground};
  }
`;

/**
 * SVG Icon component
 */
const Icon = ({ type, className, currentBackground, ...rest }) => {
  const SVGIcon = SVGIcons[type];

  return (
    <Wrapper className={className} currentBackground={currentBackground}>
      {SVGIcon ? <SVGIcon width="1em" height="1em" {...rest} /> : `Missing icon of type ${type}`}
    </Wrapper>
  );
};

Icon.propTypes = {
  /** Custom class name */
  className: PropTypes.string,
  /** Current background color of the icon, useful if the icon needs current background color to create transparent effect */
  currentBackground: PropTypes.string,
  /** Icon type, must exported from SVGIcons */
  type: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  className: '',
  currentBackground: '#ffffff',
};

export default Icon;
