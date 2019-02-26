import React from 'react';

import { STRIKETHROUGH } from '../constants/marks';
import IconButton from './IconButton';
import markButton from './markButton';

const StrikeThough = ({ icon, active, onMouseDown, ...rest }) => (
  <IconButton {...rest} icon={icon} active={active} onMouseDown={onMouseDown} />
);

export default markButton({ type: STRIKETHROUGH, icon: 'format_strikethrough' })(StrikeThough);
