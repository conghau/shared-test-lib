import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Menu from '../Menu';
import Logo from './Logo';
import Toggler from './Toggler';
import Title from './Title';

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 0 0 ${props => (props.collapsed ? props.theme.sideBar.collapsedWidth : props.theme.sideBar.width)};
  max-width: ${props => (props.collapsed ? props.theme.sideBar.collapsedWidth : props.theme.sideBar.width)};
  min-width: ${props => (props.collapsed ? props.theme.sideBar.collapsedWidth : props.theme.sideBar.width)};
  width: ${props => (props.collapsed ? props.theme.sideBar.collapsedWidth : props.theme.sideBar.width)};
  transition: all 0.2s;
  position: relative;
  background: ${props => props.theme.sideBar.backgroundColor};
  box-shadow: 0 0 4px 0 ${props => props.theme.sideBar.shadowColor};
`;

const FooterMenu = styled(Menu)`
  margin: 30px 0;
`;

class SideBar extends Component {
  static propTypes = {
    defaultCollapsed: PropTypes.bool,
    menu: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        items: PropTypes.arrayOf(PropTypes.Component),
      })
    ),
    footerMenu: PropTypes.arrayOf(PropTypes.Component),
    logo: PropTypes.string,
    logoCollapsed: PropTypes.string,
  };

  static defaultProps = {
    defaultCollapsed: false,
    menu: [],
    footerMenu: [],
    logo: '',
    logoCollapsed: '',
  };

  constructor(props) {
    super(props);

    const { defaultCollapsed } = this.props;

    this.state = { collapsed: defaultCollapsed };
  }

  handleToggle = () => this.setState(({ collapsed }) => ({ collapsed: !collapsed }));

  render() {
    const { logoCollapsed, logo, menu, footerMenu } = this.props;
    const { collapsed } = this.state;

    return (
      <Wrapper collapsed={collapsed}>
        <Logo collapsed={collapsed}>
          <img src={collapsed ? logoCollapsed : logo} alt="Logo" />
        </Logo>

        <Toggler collapsed={collapsed} onToggle={this.handleToggle} />

        {menu.map(group => (
          <React.Fragment key={group.name}>
            <Title collapsed={collapsed}>{group.name}</Title>
            <Menu collapsed={collapsed}>{group.items.map(Item => Item)}</Menu>
          </React.Fragment>
        ))}

        {footerMenu.length > 0 && (
          <FooterMenu collapsed={collapsed}>{footerMenu.map(MenuItemComponent => MenuItemComponent)}</FooterMenu>
        )}
      </Wrapper>
    );
  }
}

export default SideBar;
