import styled, { css } from 'styled-components';

const Title = styled.h1`
  position: relative;
  margin: 44px 0 30px 0;
  padding-left: 44px;
  height: 22px;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.41;
  color: ${props => props.theme.appTitleColor};
  transition: 0.2s ${props => props.theme.transitionTiming};

  &:before {
    content: '';
    margin: 0 auto;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 1px;
    background: #dfdfdf;
    opacity: 0;
    transition: 0.4s ${props => props.theme.transitionTiming};
  }

  ${({ collapsed }) =>
    collapsed &&
    css`
      font-size: 0;
      padding: 0;

      &:before {
        opacity: 1;
      }
    `}
`;

export default Title;
