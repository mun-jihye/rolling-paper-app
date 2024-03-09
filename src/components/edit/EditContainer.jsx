import styled from 'styled-components';

export const EditContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10rem 2.4rem;
  min-height: 87rem;
  background-color: ${({ $backgroundimageurl, $backgroundcolor, theme }) =>
    $backgroundimageurl ? 'transparent' : theme[$backgroundcolor + '200']};
  background-image: ${({ $backgroundimageurl }) =>
    $backgroundimageurl ? `url(${$backgroundimageurl})` : 'none'};
  background-size: cover;
  background-repeat: no-repeat;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    padding: 8rem 2.4rem;
  }
  @media ${({ theme }) => theme.breakpoint.mobile} {
    padding: 3rem 2.4rem;
  }
`;
