import styled, { css } from 'styled-components';

export const StyledDivider = styled.div`
  height: 2.5rem;
  background-color: ${({ theme }) => theme.gray200};

  ${({ type }) =>
    type
      ? css`
          width: 0.15rem;
          margin: 0 2rem;
          @media ${({ theme }) => theme.breakpoint.tablet},
            ${({ theme }) => theme.breakpoint.mobile} {
            display: none;
          }
        `
      : css`
          width: 0.1rem;
        `}
`;
