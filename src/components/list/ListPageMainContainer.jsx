import styled from 'styled-components';

const ListPageMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5.4rem;
  padding-top: 4rem;
  padding-bottom: 14.6rem;

  @media (min-width: 48rem) {
    gap: 3rem;
    padding-top: 5rem;
    padding-bottom: 23.6rem;
  }

  @media (min-width: 75rem) {
    padding-bottom: 14.4rem;
  }
`;

export default ListPageMainContainer;
