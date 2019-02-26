import React from 'react';

import IconButton from './IconButton';
import alignButton from './alignButton';

const AlignCenter = ({ icon, active, onMouseDown, ...rest }) => (
  <IconButton {...rest} icon={icon} active={active} onMouseDown={onMouseDown} />
);

export default alignButton({ align: 'center', icon: 'format_align_center' })(AlignCenter);
