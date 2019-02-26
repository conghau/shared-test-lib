import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import Plain from 'slate-plain-serializer';

import { Value } from 'slate';
import Icon from 'components/Icon';
import { InlineEditor } from 'components/Editor';
import AudioRecorder from 'components/AudioRecorder';
import AudioPlayer from 'components/AudioPlayer';

const Wrapper = styled.div`
  padding: 20px 35px 20px 20px;
  border-radius: 8px;
  box-shadow: ${props => (props.highlight ? '0 4px 10px 0 rgba(27, 39, 51, 0.2)' : 'none')};
  background-color: ${props => props.theme.whiteColor};
  position: relative;

  margin-top: 20px;
  &:first-child {
    margin-top: 0;
  }
`;

const CollapseWrapper = styled(Wrapper)`
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
  margin: 20px 0;
`;

const StyledAudioPlayer = styled(AudioPlayer)`
  margin-bottom: 10px;
`;

const StyledAudioRecorder = styled(AudioRecorder)`
  margin-top: 20px;
  justify-content: center;
  display: flex;
`;
const List = styled.div``;

const SortableList = SortableContainer(List);

const SortableItem = SortableElement(StyledAudioPlayer);

const CollapseIcon = styled(Icon).attrs({
  type: 'Collapse',
})`
  color: #9b9b9b;
  position: absolute;
  top: 15px;
  right: 35px;
  z-index: 9999;
  cursor: pointer;
`;

const RemoveIcon = styled(Icon).attrs({ type: 'Close' })`
  color: #9b9b9b;
  position: absolute;
  top: 15px;
  right: 10px;
  z-index: 9999;
  cursor: pointer;
`;

const UncollapseIcon = styled(Icon).attrs({
  type: 'Uncollapse',
})`
  margin-right: 10px;
  color: #9b9b9b;
  cursor: pointer;
`;

const UncollapseRemoveIcon = styled(Icon).attrs({
  type: 'Close',
})`
  color: #9b9b9b;
  cursor: pointer;
`;

const SummaryText = styled.div`
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0 20px;
`;

const RedDot = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primaryColor};
`;

class DetailComment extends Component {
  static propTypes = {
    commentKey: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    highlight: PropTypes.bool,
    audioRecorded: PropTypes.func.isRequired,
    moveAudio: PropTypes.func.isRequired,
    removeAudio: PropTypes.func.isRequired,
    removeComment: PropTypes.func.isRequired,
    changeComment: PropTypes.func.isRequired,
    records: PropTypes.arrayOf(PropTypes.string),
    readOnly: PropTypes.bool,
    collapseByDefault: PropTypes.bool,
  };

  static defaultProps = {
    highlight: false,
    collapseByDefault: false,
    records: [],
    readOnly: false,
  };

  constructor(props) {
    super(props);
    const { content, collapseByDefault } = props;
    this.state = {
      value: content
        ? Value.fromJSON(JSON.parse(content))
        : Value.fromJSON({
            document: {
              nodes: [
                {
                  object: 'block',
                  type: 'paragraph',
                  nodes: [{ object: 'text', leaves: [{ text: '' }] }],
                },
              ],
            },
          }),
      isCollapsed: collapseByDefault,
    };
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    const { moveAudio, commentKey } = this.props;
    moveAudio(commentKey, oldIndex, newIndex);
  };

  handleChange = ({ value }) => {
    const { commentKey, changeComment } = this.props;

    this.setState({ value });

    changeComment(commentKey, JSON.stringify(value));
  };

  toggleCollapse = () => {
    const { isCollapsed } = this.state;
    this.setState({ isCollapsed: !isCollapsed });
  };

  removeComment = () => {
    const { commentKey, removeComment } = this.props;
    removeComment(commentKey);
  };

  render() {
    const { highlight, audioRecorded, commentKey, removeAudio, records, readOnly } = this.props;
    const { value, isCollapsed } = this.state;

    if (isCollapsed) {
      return (
        <CollapseWrapper highlight={highlight} onClick={this.toggleCollapse}>
          <RedDot />
          <SummaryText>{Plain.serialize(value)}</SummaryText>
          <UncollapseIcon />
          {!readOnly && <UncollapseRemoveIcon onClick={this.removeComment} />}
        </CollapseWrapper>
      );
    }

    return (
      <Wrapper highlight={highlight}>
        <CollapseIcon onClick={this.toggleCollapse} />
        {!readOnly && <RemoveIcon onClick={this.removeComment} />}

        <InlineEditor readOnly={readOnly} placeholder="Put your comment" value={value} onChange={this.handleChange} />
        <Title>Explain</Title>
        <SortableList onSortEnd={this.onSortEnd} useDragHandle>
          {records.map((audioUrl, index) => (
            <SortableItem
              key={audioUrl}
              index={index}
              src={audioUrl}
              onRemove={() => removeAudio(commentKey, audioUrl)}
              disabled={readOnly}
              readOnly={readOnly}
            />
          ))}
        </SortableList>
        {!readOnly && <StyledAudioRecorder onSuccessUpload={res => audioRecorded(commentKey, res.resourceUrl)} />}
      </Wrapper>
    );
  }
}

export default DetailComment;
