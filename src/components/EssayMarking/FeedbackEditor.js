import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Value } from 'slate';
import Plain from 'slate-plain-serializer';

import { essayMarkingActions } from 'redux/modules/essayMarking';
import { FullEditor } from 'components/Editor';
import Icon from 'components/Icon';

const Title = styled.div`
  margin: 20px 0;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.41;
  letter-spacing: -0.4px;
  color: ${props => props.theme.textMuteColor};
  cursor: pointer;
`;

const Wrapper = styled.div`
  min-height: 469px;
  border-radius: 4px;
  box-shadow: 8px 8px 24px 0 rgba(0, 0, 0, 0.05);
  background-color: ${props => props.theme.whiteColor};
`;

const SummaryText = styled.div`
  flex: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin: 0 20px;
`;

const CollapseWrapper = styled(Wrapper)`
  min-height: inherit;
  padding: 20px;
`;

const CollapseIcon = styled(Icon).attrs({
  type: 'Collapse',
})`
  color: ${props => props.theme.primaryColor};
  cursor: pointer;
  float: right;
  margin-right: 10px;
  margin-top: 5px;
`;

const UncollapseIcon = styled(CollapseIcon).attrs({
  type: 'Uncollapse',
})``;

class FeedbackEditor extends Component {
  static propTypes = {
    feedback: PropTypes.string.isRequired,
    changeFeedback: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const { feedback } = props;

    this.state = {
      isCollapsed: false,
      value: feedback
        ? Value.fromJSON(JSON.parse(feedback))
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
    };
  }

  handleChange = ({ value }) => {
    const { changeFeedback } = this.props;
    this.setState({
      value,
    });
    changeFeedback(JSON.stringify(value.toJSON()));
  };

  toggleCollapse = () => {
    const { isCollapsed } = this.state;
    this.setState({ isCollapsed: !isCollapsed });
  };

  render() {
    const { value, isCollapsed } = this.state;

    return (
      <>
        <Title onClick={this.toggleCollapse}>
          FEEDBACK
          {isCollapsed ? <UncollapseIcon /> : <CollapseIcon />}
        </Title>
        {isCollapsed ? (
          <CollapseWrapper>
            <SummaryText>{Plain.serialize(value)}</SummaryText>
          </CollapseWrapper>
        ) : (
          <Wrapper>
            <FullEditor placeholder="Enter feedback" value={value} onChange={this.handleChange} />
          </Wrapper>
        )}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeFeedback: feedback => dispatch(essayMarkingActions.updateFeedback(feedback)),
});

export default connect(
  null,
  mapDispatchToProps
)(FeedbackEditor);
