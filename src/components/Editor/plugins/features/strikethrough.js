import { STRIKETHROUGH } from '../../constants/marks';
import markPlugin from '../helpers/markPlugin';

export const StrikeThroughPlugin = options => {
  const strikethroughOptions = {
    ...{
      type: STRIKETHROUGH,
      tagName: 'del',
    },
    ...options,
  };

  return markPlugin(strikethroughOptions, 'mod+alt+s');
};
