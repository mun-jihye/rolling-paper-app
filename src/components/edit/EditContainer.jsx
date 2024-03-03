import styled from 'styled-components';

export const EditContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-image: ${({ backgroundImageURL }) => backgroundImageURL};
  @media (min-width: 1248px) {
    padding-left: calc((100% - 120rem) / 2);
    padding-right: calc((100% - 120rem) / 2);
  }
`;
