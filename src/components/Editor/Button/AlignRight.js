import React from 'react';

import IconButton from './IconButton';
import alignButton from './alignButton';

const AlignRight = ({ icon, active, onMouseDown, ...rest }) => (
  <IconButton {...rest} icon={icon} active={active} onMouseDown={onMouseDown} />
);

export default alignButton({ align: 'right', icon: 'format_align_right' })(AlignRight);
