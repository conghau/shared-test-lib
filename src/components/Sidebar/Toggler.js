import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transparentize } from 'polished';

import Icon from '../Icon';

const SmallIcon = styled(Icon)`
  font-size: 0.6rem;
  color: rgb(107, 119, 140);
  vertical-align: middle;
`;

const IndicatorLine = styled.div`
  display: none;
  width: 2px;
  height: 100%;
  background: ${props => transparentize(0.6, props.theme.primaryColor)};
`;

const IndicatorIcon = styled.div`
  display: none;
  position: absolute;
  top: 52px;
  transform: translate(-50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${props => props.theme.whiteColor};
  box-shadow: rgba(9, 30, 66, 0.08) 0px 0px 0px 1px, rgba(9, 30, 66, 0.08) 0px 2px 4px 1px;
`;

const TogglerWrapper = styled.div`
  position: absolute;
  left: 100%;
  transform: translateX(-50%);
  width: 28px;
  height: 100%;
  text-align: center;
  overflow-y: hidden;
  cursor: pointer;

  &:hover {
    ${IndicatorLine}, ${IndicatorIcon} {
      display: inline-block;
    }
  }
`;

const Toggler = ({ collapsed, className, onToggle }) => (
  <TogglerWrapper className={className} type="button" onClick={onToggle}>
    <IndicatorLine collapsed={collapsed} />
    <IndicatorIcon collapsed={collapsed}>
      <SmallIcon type={collapsed ? 'Left' : 'Right'} />
    </IndicatorIcon>
  </TogglerWrapper>
);

Toggler.propTypes = {
  collapsed: PropTypes.bool,
  className: PropTypes.string,
  onToggle: PropTypes.func.isRequired,
};

Toggler.defaultProps = {
  collapsed: false,
  className: '',
};

export default Toggler;
