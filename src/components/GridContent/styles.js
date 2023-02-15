import styled, { css } from 'styled-components';
import {Container as TextComponent} from '../TextComponent/styles'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    ${TextComponent}{
      margin: 10px 0;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
  max-width: 40%;
  `}
`;
export const ContentText = styled.div`
  ${({ theme }) => css`
  max-width: 50%;
  `}
`;
