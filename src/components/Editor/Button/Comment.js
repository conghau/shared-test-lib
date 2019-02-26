import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { KeyUtils } from 'slate';

import { hasInlines } from '../queries';
import { wrapComment } from '../commands';
import IconButton from './IconButton';

class Comment extends Component {
  static propTypes = {
    editor: PropTypes.shape({}),
    icon: PropTypes.string,
    onCommentAdd: PropTypes.func,
  };

  static defaultProps = {
    editor: null,
    icon: 'insert_comment',
    onCommentAdd: () => {},
  };

  handleClick = event => {
    event.preventDefault();

    const { editor, onCommentAdd } = this.props;
    const { value } = editor;

    if (value.selection.isExpanded) {
      const key = KeyUtils.create();

      editor.command(wrapComment, key);
      onCommentAdd(key, editor);
    }
  };

  render() {
    const { editor, align, icon, onCommentAdd, ...rest } = this.props;
    const isActive = editor.query(hasInlines, 'comment');

    return <IconButton {...rest} icon={icon} active={isActive} onMouseDown={this.handleClick} />;
  }
}

export default Comment;
