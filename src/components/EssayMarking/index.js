import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { essayMarkingActions, essayMarkingSelectors } from 'redux/modules/essayMarking';
import PageHeader from 'components/PageHeader';
import Button from 'components/Button';
import Popup from 'components/Popup';
import PopupContent from 'components/Popup/PopupContent';
import TextInput from 'components/TextInput';
import FeedbackEditor from './FeedbackEditor';
import Scores from './Scores';
import CorrectionEditor from './CorrectionEditor';
import Comments from './Comments';

const EssayInfo = styled.div`
  margin: 5px 0 0 0;
  font-weight: 600;
  color: ${props => props.theme.textMuteColor};
`;

const Main = styled.div``;

const Row = styled.div`
  display: flex;
  padding: 40px 0;

  & + & {
    border-top: 1px solid ${props => props.theme.borderColor};
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  margin-right: 70px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    width: 100%;
  }
`;

const Right = styled.div`
  width: 467px;

  @media (max-width: 1300px) {
    width: 350px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ActionButton = styled(Button)`
  width: 100%;
`;

const Actions = styled.div`
  display: flex;

  ${ActionButton} + ${ActionButton} {
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    ${ActionButton} + ${ActionButton} {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`;

class EssayMarking extends React.Component {
  static propTypes = {
    essayMarking: PropTypes.shape({
      assignment: PropTypes.shape({
        id: PropTypes.string.isRequired,
        className: PropTypes.string.isRequired,
        studentUserId: PropTypes.string.isRequired,
        studentName: PropTypes.string.isRequired,
        question: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      }),
    }).isRequired,
    feedback: PropTypes.string.isRequired,
    scores: PropTypes.objectOf(PropTypes.number).isRequired,
    rewrite: PropTypes.string,
    draftRewrite: PropTypes.shape({}),
    match: PropTypes.shape({}).isRequired,
    saveEssayCorrection: PropTypes.func.isRequired,
    submitEssayCorrection: PropTypes.func.isRequired,
    requestStudentResubmit: PropTypes.func.isRequired,
    history: PropTypes.shape({}).isRequired,
  };

  static defaultProps = {
    rewrite: '',
    draftRewrite: null,
  };

  state = {
    confirmSubmit: false,
    reSubmitRequest: false,
    reSubmitRequestMessage: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyEvent, false);
    this.saveInterval = setInterval(() => this.save(), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.saveInterval);
    document.removeEventListener('keydown', this.handleKeyEvent, false);
  }

  handleKeyEvent = event => {
    if (event.ctrlKey && event.keyCode === 83) {
      this.save();
    }
  };

  convertScoreListToObj = (scores = []) => {
    const result = {};
    scores.forEach(score => {
      result[score.name] = score.value;
    });
    return result;
  };

  save = () => {
    const {
      saveEssayCorrection,
      essayMarking: { id, comments, rewrite, draftRewrite },
      scores,
      feedback,
    } = this.props;

    const payload = {
      result: {
        feedback,
        scores: this.convertScoreListToObj(scores),
      },
      snippets: (comments || []).map(c => {
        const { highlight, ...others } = c;
        return { ...others };
      }),
      rewrite: draftRewrite ? JSON.stringify(draftRewrite.toJSON()) : rewrite,
    };

    return saveEssayCorrection(id, payload);
  };

  onSaveAndExit = () => {
    const { history } = this.props;
    return this.save().then(() => {
      history.goBack();
    });
  };

  onSubmitEssay = () => {
    const {
      submitEssayCorrection,
      essayMarking: { id, comments, rewrite, draftRewrite },
      scores,
      feedback,
      history,
    } = this.props;

    const payload = {
      result: {
        feedback,
        scores: this.convertScoreListToObj(scores),
      },
      snippets: (comments || []).map(c => {
        const { highlight, ...others } = c;
        return { ...others };
      }),
      rewrite: draftRewrite ? JSON.stringify(draftRewrite.toJSON()) : rewrite,
    };

    submitEssayCorrection(id, payload).then(() => {
      history.goBack();
    });
  };

  onRequestResubmit = () => {
    const {
      requestStudentResubmit,
      essayMarking: {
        assignment: { id },
      },
      history,
    } = this.props;

    const { reSubmitRequestMessage } = this.state;

    return requestStudentResubmit(id, reSubmitRequestMessage).then(() => {
      history.goBack();
    });
  };

  closeConfirmationPopup = () => this.setState({ confirmSubmit: false });

  openConfirmationPopup = () => this.setState({ confirmSubmit: true });

  closeReSubmitRequestPopup = () => this.setState({ reSubmitRequest: false });

  openReSubmitRequestPopup = () => this.setState({ reSubmitRequest: true });

  onReSubmitMessageChanged = e => this.setState({ reSubmitRequestMessage: e.target.value });

  saveInterval;

  render() {
    const {
      essayMarking: { assignment },
      scores,
      feedback,
      rewrite,
    } = this.props;

    const { confirmSubmit, reSubmitRequest, reSubmitRequestMessage } = this.state;

    if (!assignment) {
      return 'Missing assignment data';
    }

    const { className, studentUserId, studentName, question, content } = assignment;
    return (
      <>
        <PageHeader noBottomSpace>{question}</PageHeader>
        <EssayInfo>
          ID: {studentUserId} | {className} | {studentName}
        </EssayInfo>

        <Main>
          <Row>
            <Left>
              <FeedbackEditor feedback={feedback} />
            </Left>
            <Right>
              <Scores scores={scores} />
            </Right>
          </Row>

          <Row>
            <Left>
              <CorrectionEditor question={question} textValue={content} jsonValue={rewrite} />
            </Left>
            <Right>
              <Comments />
            </Right>
          </Row>

          <Row>
            <Left>
              <Actions>
                <ActionButton tertiary onClick={this.openReSubmitRequestPopup}>
                  Request student to resubmit
                </ActionButton>
                <ActionButton tertiary onClick={this.onSaveAndExit}>
                  Save and exit
                </ActionButton>
              </Actions>
            </Left>
            <Right>
              <ActionButton onClick={this.openConfirmationPopup}>Submit this marking</ActionButton>
            </Right>
          </Row>
        </Main>
        <Popup isOpen={confirmSubmit} onRequestClose={this.closeConfirmationPopup} hideOnBackdropClick>
          <PopupContent
            title="SUBMIT THIS MARKING"
            message={
              <span style={{ fontSize: '1rem' }}>
                Are you sure to submit this marking <strong>{question}</strong> from <strong>{studentName}</strong>?
              </span>
            }
            confirmBtn="OK"
            handleConfirm={this.onSubmitEssay}
            cancelBtn="Cancel"
            handleCancel={this.closeConfirmationPopup}
          />
        </Popup>
        <Popup
          isOpen={reSubmitRequest}
          onRequestClose={this.closeReSubmitRequestPopup}
          hideOnBackdropClick
          width="750px"
        >
          <PopupContent
            title="REQUEST STUDENT TO RESUBMIT"
            message={
              <div style={{ padding: '0 40px' }}>
                <TextInput
                  value={reSubmitRequestMessage}
                  onChange={this.onReSubmitMessageChanged}
                  type="textarea"
                  placeholder="Why?"
                />
              </div>
            }
            width="100%"
            confirmBtn="Send"
            confirmBtnDisabled={!reSubmitRequestMessage}
            handleConfirm={this.onRequestResubmit}
            handleCancel={this.closeReSubmitRequestPopup}
          />
        </Popup>
      </>
    );
  }
}

const mapStateToProps = state => ({
  essayMarking: essayMarkingSelectors.getEssayMarking(state),
  feedback: essayMarkingSelectors.getFeedback(state),
  scores: essayMarkingSelectors.getScores(state),
  loading: essayMarkingSelectors.isLoading(state),
  rewrite: essayMarkingSelectors.getRewrite(state),
  draftRewrite: essayMarkingSelectors.getDraftRewrite(state),
});

export default connect(
  mapStateToProps,
  essayMarkingActions
)(withRouter(EssayMarking));
