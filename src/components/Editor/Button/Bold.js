import React from 'react';

import { BOLD } from '../constants/marks';
import IconButton from './IconButton';
import markButton from './markButton';

const Bold = ({ icon, active, onMouseDown, ...rest }) => (
  <IconButton {...rest} icon={icon} active={active} onMouseDown={onMouseDown} />
);

export default markButton({ type: BOLD, icon: 'format_bold' })(Bold);
