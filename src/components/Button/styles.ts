import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondaryColor};
    border: none;
    padding: 1rem 2.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: .3s ease-in-out;

    &:hover{
      border: 1px solid ${theme.colors.secondaryColor};
      background-color: transparent;
    }
  `}
`;
