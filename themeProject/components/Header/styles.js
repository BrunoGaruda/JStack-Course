import styled from 'styled-components';

export const Container = styled.header`
  font-family: 'Times New Roman';
  font-size: 1.3rem;
  font-weight: 400;
  background-color: ${({theme}) => theme.headerBackgroundColor};
  width: auto;
  height: 100px;
  border-radius: 5px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 0 24px;

  button{
    font-size: 16px;
    cursor: pointer;
    background: transparent;
    border: none
  }
`;

