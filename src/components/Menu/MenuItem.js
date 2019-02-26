/* eslint-disable react/no-children-prop */
import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled, { css, withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const MenuIcon = styled(Icon)`
  margin-right: 20px;
  color: ${props => props.theme.sideBar.menuTextColor};
  transition: 0.3s ${props => props.theme.transitionTiming};
`;

const Label = styled.span`
  color: ${props => props.theme.sideBar.menuTextColor};
  font-size: 1.125rem;
  line-height: 1.41;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 164px;
  white-space: nowrap;
  opacity: 1;
  transition: 0.3s ${props => props.theme.transitionTiming};
`;

const Gutter = styled.div`
  display: flex;
  align-items: center;
  width: 52px;
  transition: 0.3s ${props => props.theme.transitionTiming};

  &:before {
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    opacity: 0;
    transition: 0.3s ${props => props.theme.transitionTiming};
    background: ${props => props.theme.sideBar.gutterColor};
  }
`;

const Action = styled.button`
  flex: auto;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  outline: none;
  text-align: left;
  cursor: pointer;

  &:hover,
  &:focus {
    ${MenuIcon}, ${Label} {
      color: ${props => props.theme.sideBar.menuTextHoverColor};
    }
  }
`;

const Wrapper = styled.li`
  display: flex;

  ${({ active }) =>
    active &&
    css`
      ${Gutter}:before {
        opacity: 1;
      }

      ${MenuIcon}, ${Label} {
        color: ${props => props.theme.sideBar.menuTextHoverColor};
      }
    `}

  ${({ collapsed }) =>
    collapsed &&
    css`
      ${Gutter} {
        width: 28px;

        &:before {
          width: 14px;
        }
      }

      ${Label} {
        max-width: 0;
        opacity: 0;
      }
    `}
`;

class MenuItem extends React.Component {
  static propTypes = {
    theme: PropTypes.shape({
      sideBar: PropTypes.object,
    }).isRequired,
    icon: PropTypes.string,
    label: PropTypes.string,
    to: PropTypes.string.isRequired,
    exact: PropTypes.bool,
    className: PropTypes.string,
    collapsed: PropTypes.bool,
    onClick: PropTypes.func,
    active: PropTypes.bool,
  };

  static defaultProps = {
    icon: '',
    label: '',
    exact: false,
    className: '',
    collapsed: false,
    active: false,
    onClick: () => {},
  };

  render() {
    const { active, theme, icon, label, to, exact, className, collapsed, onClick, ...rest } = this.props;

    return (
      <Route
        path={to}
        exact={exact}
        children={({ match }) => (
          <Wrapper {...rest} className={className} active={active || (match && to)} collapsed={collapsed}>
            <Gutter />
            <Action as={to ? Link : 'button'} to={to} onClick={onClick}>
              <MenuIcon type={icon} insideColor={theme.sideBar.backgroundColor} />
              <Label>{label}</Label>
            </Action>
          </Wrapper>
        )}
      />
    );
  }
}

export default withTheme(MenuItem);
