import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { hasInlines } from '../queries';
import { wrapLink, unwrapLink } from '../commands';
import IconButton from './IconButton';

class Link extends Component {
  static propTypes = {
    editor: PropTypes.shape({}),
    icon: PropTypes.string,
  };

  static defaultProps = {
    editor: null,
    icon: 'insert_link',
  };

  handleClick = event => {
    event.preventDefault();

    const { editor } = this.props;
    const { value } = editor;
    const hasLinks = editor.query(hasInlines, 'link');

    if (hasLinks) {
      editor.command(unwrapLink);
    } else if (value.selection.isExpanded) {
      // eslint-disable-next-line no-alert
      const href = window.prompt('Enter the URL of the link:');

      if (href === null) {
        return;
      }

      editor.command(wrapLink, href);
    } else {
      // eslint-disable-next-line no-alert
      const href = window.prompt('Enter the URL of the link:');

      if (href === null) {
        return;
      }

      // eslint-disable-next-line no-alert
      const text = window.prompt('Enter the text for the link:');

      if (text === null) {
        return;
      }

      editor
        .insertText(text)
        .moveFocusBackward(text.length)
        .command(wrapLink, href);
    }
  };

  render() {
    const { editor, align, icon, ...rest } = this.props;
    const isActive = editor.query(hasInlines, 'link');

    return <IconButton {...rest} icon={icon} active={isActive} onMouseDown={this.handleClick} />;
  }
}

export default Link;
