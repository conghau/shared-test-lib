import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { essayMarkingActions, essayMarkingSelectors } from 'redux/modules/essayMarking';
import DetailComment from './DetailComment';

const List = styled.div``;

const Title = styled.div`
  margin-bottom: 20px;
  font-family: Karla;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.41;
  letter-spacing: -0.5px;
  color: ${props => props.theme.blackColor};
`;

const Comments = ({ comments, audioRecorded, changeComment, moveAudio, removeAudio, removeComment, readOnly }) => (
  <>
    <Title>Detail</Title>
    <List>
      {comments.map(comment => (
        <DetailComment
          key={comment.commentKey}
          commentKey={comment.commentKey}
          content={comment.content}
          records={comment.explainMedias}
          audioRecorded={audioRecorded}
          moveAudio={moveAudio}
          changeComment={changeComment}
          removeAudio={removeAudio}
          removeComment={removeComment}
          highlight={comment.highlight}
          readOnly={readOnly}
          collapseByDefault={readOnly}
        />
      ))}
    </List>
  </>
);

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string,
      explainMedias: PropTypes.array,
      commentKey: PropTypes.string,
    })
  ).isRequired,
};

const mapStateToProps = state => ({
  comments: essayMarkingSelectors.getComments(state),
});

const mapDispatchToProps = dispatch => ({
  removeComment: commentKey => dispatch(essayMarkingActions.removeComment(commentKey)),
  removeAudio: (commentKey, audioUrl) => dispatch(essayMarkingActions.removeAudio(commentKey, audioUrl)),
  moveAudio: (commentKey, audioIndex1, audioIndex2) =>
    dispatch(essayMarkingActions.moveAudio(commentKey, audioIndex1, audioIndex2)),
  audioRecorded: (commentKey, audioUrl) => dispatch(essayMarkingActions.audioRecorded(commentKey, audioUrl)),
  changeComment: (commentKey, content) => dispatch(essayMarkingActions.changeComment(commentKey, content)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
