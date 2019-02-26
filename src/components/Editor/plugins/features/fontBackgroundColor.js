import { FONTBGCOLOR } from '../../constants/marks';
import markPlugin from '../helpers/markPlugin';

export const FontBackgroundColorPlugin = options => {
  const fontBackgroundColorOptions = {
    ...{
      type: FONTBGCOLOR,
      tagName: 'span',
      styleAttrs: {
        backgroundColor: mark => mark.data.get('color'),
      },
    },
    ...options,
  };

  return markPlugin(fontBackgroundColorOptions, '');
};
