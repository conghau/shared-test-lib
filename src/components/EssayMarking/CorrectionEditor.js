import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Value } from 'slate';
import Plain from 'slate-plain-serializer';

import { essayMarkingActions } from 'redux/modules/essayMarking';
import { InlineEditor } from 'components/Editor';

const Question = styled.div`
  margin-bottom: 40px;
  font-family: Karla;
  font-size: 1.375rem;
  font-weight: bold;
  line-height: 1.41;
  letter-spacing: -0.4px;
  color: ${props => props.theme.blackColor};
`;

class CorrectionEditor extends Component {
  static propTypes = {
    question: PropTypes.string,
    // eslint-disable-next-line react/no-unused-prop-types
    textValue: PropTypes.string,
    // eslint-disable-next-line react/no-unused-prop-types
    jsonValue: PropTypes.string,
    addComment: PropTypes.func.isRequired,
    removeComment: PropTypes.func.isRequired,
    highlightComment: PropTypes.func.isRequired,
    updateCorrection: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
  };

  static defaultProps = {
    question: '',
    textValue: '',
    jsonValue: '',
    readOnly: false,
  };

  static getDerivedStateFromProps(props, state) {
    const { jsonValue, textValue } = props;

    let parsedJSON = null;

    try {
      parsedJSON = JSON.parse(jsonValue);
    } catch (error) {
      // Ignore
    }

    if (!state.value) {
      return {
        value: parsedJSON ? Value.fromJSON(parsedJSON) : Plain.deserialize(textValue),
      };
    }

    return null;
  }

  state = {
    value: null,
  };

  handleChange = ({ value }) => {
    const { updateCorrection } = this.props;

    this.setState({ value });
    updateCorrection(value);
  };

  handleCommentAdd = key => {
    const { addComment, highlightComment } = this.props;

    addComment(key);
    highlightComment(key);
  };

  handleCommentRemove = key => {
    const { removeComment } = this.props;

    removeComment(key);
  };

  handleCommentSelect = ([key]) => {
    const { highlightComment } = this.props;
    highlightComment(key);
  };

  render() {
    const { question, readOnly } = this.props;
    const { value } = this.state;
    return (
      <>
        <Question>{question}</Question>
        <InlineEditor
          readOnly={readOnly}
          placeholder="Answer"
          value={value}
          editorRef={React.createRef()}
          onChange={this.handleChange}
          onCommentAdd={this.handleCommentAdd}
          onCommentSelect={this.handleCommentSelect}
          onCommentRemove={this.handleCommentRemove}
        />
      </>
    );
  }
}

export default connect(
  null,
  essayMarkingActions
)(CorrectionEditor);
