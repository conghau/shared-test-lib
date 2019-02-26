import React from 'react';

import { ITALIC } from '../constants/marks';
import IconButton from './IconButton';
import markButton from './markButton';

const Italic = ({ icon, active, onMouseDown, ...rest }) => (
  <IconButton {...rest} icon={icon} active={active} onMouseDown={onMouseDown} />
);

export default markButton({ type: ITALIC, icon: 'format_italic' })(Italic);
