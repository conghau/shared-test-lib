import React from 'react';
import styled from 'styled-components';

import {
  BoldButton,
  ItalicButton,
  StrikeThroughButton,
  FontColorButton,
  FontBackgroundColorButton,
  AlignLeftButton,
  AlignCenterButton,
  AlignRightButton,
  LinkButton,
} from '../../Button';
import Toolbar from '../../Toolbar';

const defaultButtons = [
  BoldButton,
  ItalicButton,
  StrikeThroughButton,
  FontColorButton,
  FontBackgroundColorButton,
  AlignLeftButton,
  AlignCenterButton,
  AlignRightButton,
  LinkButton,
];

const EditorWrapper = styled.div`
  padding: 25px;
`;

export const ToolbarPlugin = ({ buttons } = { buttons: defaultButtons }) => ({
  renderEditor: (props, editor, next) => (
    <>
      <Toolbar editor={editor} buttons={buttons} />
      <EditorWrapper>{next()}</EditorWrapper>
    </>
  ),
});
