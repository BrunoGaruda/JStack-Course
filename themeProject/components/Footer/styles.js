import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({theme}) => theme.footerBackgroundColor};
  width: auto;
  display: flex;
  height: 70px;
  align-items: center;
  padding: 0px 24px;
  justify-content: center;
  margin-top: 24px;
  color: #fff;
  
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

`;
