import React from 'react';
import styled from 'styled-components';

const Button = styled.span`
  color: ${props => (props.active ? '#222222' : '#9b9b9b')};
  cursor: pointer;
`;

const Icon = ({ className, ...rest }) => <span className={`material-icons ${className}`} {...rest} />;

const StyledIcon = styled(Icon)`
  font-size: 1.125rem;
  vertical-align: text-bottom;
`;

const IconButton = ({ active, icon, onMouseDown, ...rest }) => (
  <Button {...rest} active={active} onMouseDown={onMouseDown}>
    <StyledIcon>{icon}</StyledIcon>
  </Button>
);

export default IconButton;
