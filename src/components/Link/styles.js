import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.medium};
    color: ${theme.colors.colorLink};
  `}
`;
