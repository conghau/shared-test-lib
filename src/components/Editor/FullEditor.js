import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'slate-react';

import { BoldPlugin } from './plugins/features/bold';
import { ItalicPlugin } from './plugins/features/italic';
import { StrikeThroughPlugin } from './plugins/features/strikethrough';
import { FontColorPlugin } from './plugins/features/fontColor';
import { FontBackgroundColorPlugin } from './plugins/features/fontBackgroundColor';
import { AlignPlugin } from './plugins/features/align';
import { LinkPlugin } from './plugins/features/link';
import { ToolbarPlugin } from './plugins/features/toolbar';

const plugins = [
  BoldPlugin(),
  ItalicPlugin(),
  StrikeThroughPlugin(),
  FontColorPlugin(),
  FontBackgroundColorPlugin(),
  AlignPlugin(),
  LinkPlugin(),
  ToolbarPlugin(),
];

class FullEditor extends Component {
  static propTypes = {
    value: PropTypes.shape({}),
    plugins: PropTypes.arrayOf(PropTypes.object),
    editorRef: PropTypes.shape({}),
    onChange: PropTypes.func,
  };

  static defaultProps = {
    value: null,
    plugins,
    editorRef: null,
    onChange: () => {},
  };

  handleChange = value => {
    const { onChange } = this.props;

    onChange(value);
  };

  render() {
    const { value, editorRef, ...rest } = this.props;

    return <Editor {...rest} value={value} ref={editorRef} onChange={this.handleChange} />;
  }
}

export default FullEditor;
