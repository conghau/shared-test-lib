import React from 'react';
import { getEventTransfer } from 'slate-react';
import isUrl from 'is-url';

import { wrapLink, unwrapLink } from '../../commands';
import { hasInlines } from '../../queries';

export const LinkPlugin = () => ({
  renderNode: (props, editor, next) => {
    const { attributes, children, node } = props;

    switch (node.type) {
      case 'link': {
        const { data } = node;
        const href = data.get('href');

        return (
          <a {...attributes} href={href}>
            {children}
          </a>
        );
      }

      default: {
        return next();
      }
    }
  },

  onPaste: (event, editor, next) => {
    if (editor.value.selection.isCollapsed) return next();

    const transfer = getEventTransfer(event);
    const { type, text } = transfer;

    if (type !== 'text' && type !== 'html') return next();

    if (!isUrl(text)) return next();

    if (editor.query(hasInlines, 'link')) {
      editor.command(unwrapLink);
    }

    return editor.command(wrapLink, text);
  },
});
