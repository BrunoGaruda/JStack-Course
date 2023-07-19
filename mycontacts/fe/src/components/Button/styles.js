import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  border: none;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: bold;
  font-size: 16px;

  color: #FFFFFF;

  /* margin-top: 40px; */
  outline: none;
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }
  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }
  &[disabled] {
    background: #ccc !important;
    cursor: default !important;
  }

  // Danger colors
  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};

    &:hover {
    background: ${theme.colors.danger.light};
    }
    &:active {
    background: ${theme.colors.danger.dark};
    }
  `}
`;
