import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import theme from 'components/theme';

import Menu from 'components/Menu';
import Sidebar from '.';

import defaultLogoCollapsed from '../../assets/images/logo-small.jpeg';
import defaultLogo from '../../assets/images/logo.png';

const menu = [
  {
    name: 'Menu 1',
    items: [
      <Menu.Item to="/menu-1" icon="Home" label="Home" />,
      <Menu.Item to="/menu-2" icon="Notepad" label="Note" />,
      <Menu.Item to="/menu-3" icon="Analytics" label="Progress" />,
    ],
  },
  {
    name: 'Menu 2',
    items: [
      <Menu.Item to="/menu-1" icon="Home" label="Home" />,
      <Menu.Item to="/menu-2" icon="Notepad" label="Note" />,
      <Menu.Item to="/menu-3" icon="Analytics" label="Progress" />,
    ],
  },
];

const footerMenu = [<Menu.Item label="Log out" icon="LogOut" onClick={() => alert('clicked!')} />];

const Container = props => (
  <div>
    <Sidebar logo={defaultLogo} logoCollapsed={defaultLogoCollapsed} menu={menu} footerMenu={footerMenu} {...props} />
  </div>
);

storiesOf('Sidebar', module).add('default', () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Route component={Container} />
    </Router>
  </ThemeProvider>
));
