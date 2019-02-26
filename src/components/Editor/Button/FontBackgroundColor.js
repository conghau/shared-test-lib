import React from 'react';

import { FONTBGCOLOR } from '../constants/marks';
import IconButton from './IconButton';
import markButton from './markButton';

const FontBackgroundColor = ({ icon, active, onMouseDown, ...rest }) => (
  <IconButton {...rest} icon={icon} active={active} onMouseDown={onMouseDown} />
);

export default markButton({
  type: FONTBGCOLOR,
  icon: 'border_color',
  data: { color: 'rgba(239, 56, 87, .25)' },
})(FontBackgroundColor);
