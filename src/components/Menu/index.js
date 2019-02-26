import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MenuItem from './MenuItem';

const StyledMenuItem = styled(MenuItem)``;

const Wrapper = styled.ul`
  margin: 0;
  padding: 0;

  ${StyledMenuItem} + ${StyledMenuItem} {
    margin-top: 30px;
  }
`;

class Menu extends Component {
  static propTypes = {
    className: PropTypes.string,
    collapsed: PropTypes.bool,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    className: '',
    collapsed: false,
  };

  static Item = StyledMenuItem;

  render() {
    const { className, collapsed, children } = this.props;

    return (
      <Wrapper className={className}>
        {React.Children.map(children, child => React.cloneElement(child, { collapsed }))}
      </Wrapper>
    );
  }
}

export default Menu;
