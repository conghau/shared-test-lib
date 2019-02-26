import { BOLD } from '../../constants/marks';
import markPlugin from '../helpers/markPlugin';

export const BoldPlugin = options => {
  const boldOptions = {
    ...{
      type: BOLD,
      tagName: 'strong',
    },
    ...options,
  };

  return markPlugin(boldOptions, 'mod+b');
};
