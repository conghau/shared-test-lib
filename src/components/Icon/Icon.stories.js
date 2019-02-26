import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Icon from '.';

const Wrapper = styled.div`
  background: ${props => (props.dark ? '#4a4a4a' : 'inherit')};
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  font-size: 1.5rem;
  color: ${props => (props.dark ? '#ffffff' : '#4a4a4a')};

  & > * {
    margin: 10px;
  }
`;

const IconList = ({ dark, children }) => <Wrapper dark={dark}>{children}</Wrapper>;

IconList.propTypes = {
  dark: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

IconList.defaultProps = {
  dark: false,
};

storiesOf('Icon', module)
  .add('light background', () => (
    <IconList>
      <Icon type="Analytics" currentBackground="#ffffff" />
      <Icon type="Bell" currentBackground="#ffffff" />
      <Icon type="BellRedDot" currentBackground="#ffffff" />
      <Icon type="CalendarClock" currentBackground="#ffffff" />
      <Icon type="Home" currentBackground="#ffffff" />
      <Icon type="Mail" currentBackground="#ffffff" />
      <Icon type="Notepad" currentBackground="#ffffff" />
      <Icon type="Notification" currentBackground="#ffffff" />
      <Icon type="Plus" currentBackground="#ffffff" />
      <Icon type="LogOut" currentBackground="#ffffff" />
      <Icon type="Left" currentBackground="#ffffff" />
      <Icon type="Right" currentBackground="#ffffff" />
      <Icon type="Close" currentBackground="#ffffff" />
      <Icon type="Facebook" currentBackground="#ffffff" />
      <Icon type="ApprovedFile" currentBackground="#ffffff" />
      <Icon type="LookupFile" currentBackground="#ffffff" />
      <Icon type="NewFile" currentBackground="#ffffff" />
      <Icon type="People" currentBackground="#ffffff" />
      <Icon type="Person" currentBackground="#ffffff" />
      <Icon type="RecentFile" currentBackground="#ffffff" />
      <Icon type="RejectedFile" currentBackground="#ffffff" />
      <Icon type="Wallet" currentBackground="#ffffff" />
      <Icon type="SettingGear" currentBackground="#ffffff" />
      <Icon type="EcoSystem" currentBackground="#ffffff" />
      <Icon type="Feedback" currentBackground="#ffffff" />
      <Icon type="LightBulb" currentBackground="#ffffff" />
    </IconList>
  ))
  .add('dark background', () => (
    <IconList dark>
      <Icon type="Analytics" currentBackground="#4a4a4a" />
      <Icon type="Bell" currentBackground="#4a4a4a" />
      <Icon type="BellRedDot" currentBackground="#4a4a4a" />
      <Icon type="CalendarClock" currentBackground="#4a4a4a" />
      <Icon type="Home" currentBackground="#4a4a4a" />
      <Icon type="Mail" currentBackground="#4a4a4a" />
      <Icon type="Notepad" currentBackground="#4a4a4a" />
      <Icon type="Notification" currentBackground="#4a4a4a" />
      <Icon type="Plus" currentBackground="#4a4a4a" />
      <Icon type="LogOut" currentBackground="#4a4a4a" />
      <Icon type="Left" currentBackground="#4a4a4a" />
      <Icon type="Right" currentBackground="#4a4a4a" />
      <Icon type="Close" currentBackground="#4a4a4a" />
      <Icon type="Facebook" currentBackground="#4a4a4a" />
      <Icon type="ApprovedFile" currentBackground="#4a4a4a" />
      <Icon type="LookupFile" currentBackground="#4a4a4a" />
      <Icon type="NewFile" currentBackground="#4a4a4a" />
      <Icon type="People" currentBackground="#4a4a4a" />
      <Icon type="Person" currentBackground="#4a4a4a" />
      <Icon type="RecentFile" currentBackground="#4a4a4a" />
      <Icon type="RejectedFile" currentBackground="#4a4a4a" />
      <Icon type="Wallet" currentBackground="#4a4a4a" />
      <Icon type="SettingGear" currentBackground="#4a4a4a" />
      <Icon type="EcoSystem" currentBackground="#4a4a4a" />
      <Icon type="Feedback" currentBackground="#4a4a4a" />
      <Icon type="LightBulb" currentBackground="#4a4a4a" />
    </IconList>
  ))
  .add('missing type', () => <Icon type="Something" />);
