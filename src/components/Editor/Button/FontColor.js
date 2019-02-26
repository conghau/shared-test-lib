import React from 'react';

import { FONTCOLOR } from '../constants/marks';
import IconButton from './IconButton';
import markButton from './markButton';

const FontColor = ({ icon, active, onMouseDown, ...rest }) => (
  <IconButton {...rest} icon={icon} active={active} onMouseDown={onMouseDown} />
);

export default markButton({ type: FONTCOLOR, icon: 'format_color_text', data: { color: '#ef3857' } })(FontColor);
