import React from 'react';
import isHotkey from 'is-hotkey';

const mapStyles = (styleAttrs, mark) =>
  styleAttrs && Object.keys(styleAttrs).reduce((style, attr) => ({ ...style, [attr]: styleAttrs[attr](mark) }), {});

export default (options, hotkey) => ({
  renderMark: (props, editor, next) => {
    if (props.mark.type === options.type) {
      const { tagName: Tag, styleAttrs } = options;
      const { attributes, mark, children } = props;

      return (
        <Tag {...attributes} style={mapStyles(styleAttrs, mark)} data-slate-type={Tag}>
          {children}
        </Tag>
      );
    }

    return next();
  },

  onKeyDown: (event, editor, next) => {
    if (isHotkey(hotkey, event)) {
      editor.toggleMark(options.type);
    }

    return next();
  },
});
