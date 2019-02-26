import { ITALIC } from '../../constants/marks';
import markPlugin from '../helpers/markPlugin';

export const ItalicPlugin = options => {
  const italicOptions = {
    ...{
      type: ITALIC,
      tagName: 'em',
    },
    ...options,
  };

  return markPlugin(italicOptions, 'mod+i');
};
