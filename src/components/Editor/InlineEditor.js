import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'slate-react';

import { hasInlines, getInlines } from './queries';
import { BoldPlugin } from './plugins/features/bold';
import { ItalicPlugin } from './plugins/features/italic';
import { StrikeThroughPlugin } from './plugins/features/strikethrough';
import { FontColorPlugin } from './plugins/features/fontColor';
import { FontBackgroundColorPlugin } from './plugins/features/fontBackgroundColor';
import { CommentPlugin } from './plugins/features/comment';
import { FloatToolbarPlugin } from './plugins/features/floatToolbar';
import { CommentButton } from './Button';

class InlineEditor extends Component {
  static propTypes = {
    value: PropTypes.shape({}),
    plugins: PropTypes.arrayOf(PropTypes.object),
    editorRef: PropTypes.shape({}),
    onChange: PropTypes.func,
    onCommentAdd: PropTypes.func,
    onCommentSelect: PropTypes.func,
    onCommentRemove: PropTypes.func,
  };

  static defaultProps = {
    value: null,
    plugins: null,
    editorRef: React.createRef(),
    onChange: () => {},
    onCommentAdd: () => {},
    onCommentSelect: () => {},
    onCommentRemove: () => {},
  };

  constructor(props) {
    super(props);

    const { onCommentAdd, onCommentRemove, readOnly, onCommentSelect } = this.props;

    this.defaultPlugins = [
      BoldPlugin(),
      ItalicPlugin(),
      StrikeThroughPlugin(),
      FontColorPlugin(),
      FontBackgroundColorPlugin(),
      CommentPlugin({ onCommentRemove, readOnly, onCommentSelect }),
      FloatToolbarPlugin({ buttonEvents: { [CommentButton]: { onCommentAdd } } }),
    ];
  }

  handleChange = value => {
    const { onChange } = this.props;

    onChange(value);
    // this.handleCommentSelect();
  };

  handleCommentSelect = () => {
    const { editorRef, onCommentSelect } = this.props;

    if (!editorRef || !editorRef.current) {
      return;
    }

    const editor = editorRef.current;
    const hasComments = editor.query(hasInlines, 'comment');
    if (hasComments && onCommentSelect) {
      const comments = editor.query(getInlines, 'comment');
      const commentKeys = comments.map(comment => comment.get('data') && comment.get('data').get('key'));

      onCommentSelect(commentKeys.toSet().toArray());
    }
  };

  render() {
    const { value, plugins, editorRef, onCommentAdd, onCommentSelect, onCommentRemove, ...rest } = this.props;

    return (
      <Editor
        {...rest}
        plugins={plugins || this.defaultPlugins}
        value={value}
        ref={editorRef}
        onChange={this.handleChange}
      />
    );
  }
}

export default InlineEditor;
