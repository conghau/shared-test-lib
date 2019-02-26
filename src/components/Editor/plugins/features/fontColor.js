import { FONTCOLOR } from '../../constants/marks';
import markPlugin from '../helpers/markPlugin';

export const FontColorPlugin = options => {
  const fontColorOptions = {
    ...{
      type: FONTCOLOR,
      tagName: 'span',
      styleAttrs: {
        color: mark => mark.data.get('color'),
      },
    },
    ...options,
  };

  return markPlugin(fontColorOptions, '');
};
