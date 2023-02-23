import styled, { css } from 'styled-components';
import {Container as Heading} from "../Heading/styles"

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    ${Heading} {
      margin: 10px 0;
      font-weight: 200;
    }
  `}
`;

export const Spense = styled.div`
  ${({ theme }) => css`
    width: 550px;
  `}
`;
export const SpenseImageContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
  `}
`;
export const SpenseText = styled.div`
  ${({ theme }) => css`
    max-width: 540px;
  `}
`;
export const YelpCamp = styled.div`
  ${({ theme }) => css`
    width: 550px;
    margin: 5px 0;
  `}
`;

export const YelpCampImageContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
  `}
`;

export const YelpCampText = styled.div`
  ${({ theme }) => css`
    max-width: 540px;
  `}
`;