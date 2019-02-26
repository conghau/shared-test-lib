import React from 'react';

import {
  BoldButton,
  ItalicButton,
  StrikeThroughButton,
  FontColorButton,
  FontBackgroundColorButton,
  CommentButton,
} from '../../Button';
import FloatToolbar from '../../FloatToolbar';

const defaultButtons = [
  BoldButton,
  ItalicButton,
  StrikeThroughButton,
  FontColorButton,
  FontBackgroundColorButton,
  CommentButton,
];

export const FloatToolbarPlugin = options => {
  const { buttons, buttonEvents } = { buttons: defaultButtons, ...options };

  return {
    renderEditor: (props, editor, next) => (
      <FloatToolbar editor={editor} editorComponent={next()} buttons={buttons} buttonEvents={buttonEvents} />
    ),
  };
};
