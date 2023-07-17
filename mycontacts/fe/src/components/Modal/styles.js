import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(5px);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 450px;
  width: 100%;

  background: #fff;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 450px;
  /* height: 200px; */

  > h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray[900]
  )}
  }

  .modal-body {
    margin-top: 32px
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;


  .cancel-button {
    padding: 16px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.05);
    border: none;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[200]};
    margin-right: 24px
  }
`;
