import styled from 'styled-components';

const PapersContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  margin: 0 auto;

  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 38.6rem) {
    justify-content: ${({ $count }) => ($count < 2 ? 'center' : '')};
  }

  @media (min-width: 57.1rem) {
    justify-content: ${({ $count }) => ($count < 3 ? 'center' : '')};
  }

  @media (min-width: 75rem) {
    justify-content: ${({ $count }) => ($count < 4 ? 'center' : '')};
    padding: 0 0.5rem;
    position: relative;
    left: -0.5rem;
  }
`;

export default PapersContainer;
