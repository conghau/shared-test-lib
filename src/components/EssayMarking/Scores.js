import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from 'components/Button';
import TextInput from 'components/TextInput';
import { essayMarkingActions } from 'redux/modules/essayMarking';
import Icon from 'components/Icon';

const Title = styled.div`
  margin: 20px 0;
  font-size: 1.125rem;
  font-weight: bold;
  line-height: 1.41;
  letter-spacing: -0.4px;
  cursor: pointer;
  color: ${props => props.theme.textMuteColor};
`;

const AddMoreButton = styled(Button)`
  width: 100%;
`;

const CriteriaInput = styled(TextInput)`
  width: 100%;
  flex: 1;
  margin-right: 20px;
`;

const Wrapper = styled.div`
  border-radius: 4px;
  box-shadow: 8px 8px 24px 0 rgba(0, 0, 0, 0.05);
  background-color: ${props => props.theme.whiteColor};
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

const Label = styled.div`
  margin: 0 40px 0 30px;
  font-size: 1.125rem;
  font-weight: 600;
  color: ${props => props.theme.blackColor};
`;

const Value = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${props => props.theme.primaryColor};
`;

const Body = styled.div`
  padding: 30px;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  background-color: ${props => props.theme.darkBackgroundColor};
`;

const CriteriaList = styled.div`
  margin: 20px 0;
`;

const ButtonContainer = styled.div`
  margin-right: 30px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 8px;
  }
`;

const ButtonRight = styled.div`
  width: 10px;
  height: 2px;
  background-color: #9b9b9b;
  right: -20px;
  cursor: pointer;
`;

class Scores extends React.Component {
  static propTypes = {
    scores: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    changeScores: PropTypes.func.isRequired,
  };

  state = {
    isCollapsed: false,
  };

  addMore = () => {
    const { scores, changeScores } = this.props;
    changeScores([
      ...scores,
      {
        key: Math.random()
          .toString(36)
          .substr(2, 5),
        name: '',
        value: 0,
      },
    ]);
  };

  updateScore = (key, name, value) => {
    const { scores, changeScores } = this.props;
    const index = scores.findIndex(s => s.key === key);
    scores[index].name = name;
    scores[index].value = value;
    changeScores([...scores]);
  };

  removeScore = key => {
    const { scores, changeScores } = this.props;
    const index = scores.findIndex(s => s.key === key);
    scores.splice(index, 1);
    changeScores([...scores]);
  };

  toggleCollapse = () => {
    const { isCollapsed } = this.state;
    this.setState({ isCollapsed: !isCollapsed });
  };

  render() {
    const { scores } = this.props;
    const { isCollapsed } = this.state;
    const overall =
      scores.length === 0 ? 0 : scores.reduce((sum, score) => sum + Number(score.value), 0) / scores.length;
    const titleText = 'SCORES';

    if (isCollapsed) {
      return (
        <>
          <Title onClick={this.toggleCollapse}>
            {titleText}
            <UncollapseIcon />
          </Title>
          <Wrapper>
            <Footer>
              <Label>Overall</Label>
              <Value>{Math.round(overall * 100) / 100}</Value>
            </Footer>
          </Wrapper>
        </>
      );
    }

    return (
      <>
        <Title onClick={this.toggleCollapse}>
          {titleText}
          <CollapseIcon />
        </Title>{' '}
        <Wrapper>
          <Body>
            <Title>Criteria</Title>
            <CriteriaList>
              {scores.map(score => (
                // eslint-disable-next-line react/no-array-index-key
                <Row key={score.index}>
                  <CriteriaInput
                    value={score.name}
                    onChange={e => this.updateScore(score.key, e.target.value, score.value)}
                  />
                  <CriteriaInput
                    value={score.value}
                    onChange={e => this.updateScore(score.key, score.name, e.target.value)}
                  />
                  {scores.length > 1 ? (
                    <ButtonRight onClick={() => this.removeScore(score.key)} />
                  ) : (
                    <div style={{ width: 10 }} />
                  )}
                </Row>
              ))}
            </CriteriaList>
            <ButtonContainer>
              <AddMoreButton tertiary onClick={this.addMore}>
                + Add more
              </AddMoreButton>
            </ButtonContainer>
          </Body>

          <Footer>
            <Label>Overall</Label>
            <Value>{Math.round(overall * 100) / 100}</Value>
          </Footer>
        </Wrapper>
      </>
    );
  }
}

export default connect(
  null,
  essayMarkingActions
)(Scores);
