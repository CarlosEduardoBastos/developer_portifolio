import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: ${theme.fonts.family.default};
      background-color: ${theme.colors.primaryColor};
    }
    a {
      text-decoration: none;
    }
  `}
`;
