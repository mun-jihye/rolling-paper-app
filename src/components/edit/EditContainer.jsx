import styled from 'styled-components';

export const EditContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10rem 2.4rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-image: ${({ backgroundImageURL }) => backgroundImageURL};

  @media ${({ theme }) => theme.breakpoint.tablet} {
    padding: 8rem 2.4rem;
  }
  @media ${({ theme }) => theme.breakpoint.mobile} {
    padding: 3rem 2.4rem;
  }
`;
