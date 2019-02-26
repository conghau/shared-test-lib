import React from 'react';

import IconButton from './IconButton';
import alignButton from './alignButton';

const AlignLeft = ({ icon, active, onMouseDown, ...rest }) => (
  <IconButton {...rest} icon={icon} active={active} onMouseDown={onMouseDown} />
);

export default alignButton({ align: 'left', icon: 'format_align_left' })(AlignLeft);
