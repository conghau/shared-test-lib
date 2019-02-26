import styled from 'styled-components';

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 44px 0 ${props => (props.collapsed ? '35px' : '0')} 0;
  height: ${props => (props.collapsed ? '40px' : '75px')};

  & > img {
    height: 100%;
  }
`;

export default Logo;
