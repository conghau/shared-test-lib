import React from 'react';

export const AlignPlugin = () => ({
  renderNode: (props, editor, next) => {
    const { attributes, node, children } = props;
    const align = node.get('data').get('align');

    if (node.type === 'paragraph' && align) {
      return (
        <div {...attributes} style={{ textAlign: align }}>
          {children}
        </div>
      );
    }

    return next();
  },
});
