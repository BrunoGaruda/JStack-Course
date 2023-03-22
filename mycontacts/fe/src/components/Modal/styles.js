import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(3px);
  position: absolute;
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
  height: 200px;
`;

export const Footer = styled.footer`

`;
