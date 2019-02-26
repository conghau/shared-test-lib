import React from 'react';
import styled from 'styled-components';

import Icon from 'components/Icon';

import { unwrapCommentByNodeKey } from '../../commands';

const highlightColor = 'rgba(239, 56, 87, .1)';

const Remove = styled(Icon).attrs({ type: 'Close' })`
  position: absolute;
  color: ${props => props.theme.whiteColor};
  background: #ff7788;
  border-radius: 50%;
  padding: 3px;
  font-size: 0.4375rem;
  bottom: -5px;
  left: -9999px;
  opacity: 0;
  transition: all 0.4s;
  cursor: pointer;
`;

const Comment = styled.span`
  position: relative;

  &:hover {
    ${Remove} {
      left: auto;
      right: -5px;
      opacity: 1;
    }
  }
`;

export const CommentPlugin = ({ onCommentRemove, readOnly, onCommentSelect } = {}) => ({
  renderNode: (props, editor, next) => {
    const { attributes, children, node } = props;

    switch (node.type) {
      case 'comment': {
        const { data, key } = node;
        const commentKey = data.get('key');

        return (
          <Comment
            {...attributes}
            style={{ backgroundColor: highlightColor, cursor: 'pointer' }}
            data-comment-key={commentKey}
            onClick={() => onCommentSelect([commentKey])}
          >
            {children}
            {!readOnly && (
              <Remove
                onClick={() => {
                  editor.command(unwrapCommentByNodeKey, key);

                  if (onCommentRemove) {
                    onCommentRemove(commentKey);
                  }
                }}
              />
            )}
          </Comment>
        );
      }

      default: {
        return next();
      }
    }
  },
});
