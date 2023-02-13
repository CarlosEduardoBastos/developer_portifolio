import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 85.375rem;
    margin: 0 auto;
    padding: 0 4rem;
  `}
`;
