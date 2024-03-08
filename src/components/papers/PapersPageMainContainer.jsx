import ListPageMainContainer from 'components/list/ListPageMainContainer';
import styled from 'styled-components';

const PapersPageMainContainer = styled(ListPageMainContainer)`
  gap: 1.2rem;
  margin: 0 auto;
  width: 27.5rem;

  @media (min-width: 38.6rem) {
    width: 57rem;
  }

  @media (min-width: 48rem) {
    gap: 1.6rem;
  }

  @media (min-width: 57.1rem) {
    width: 86.5rem;
  }

  @media (min-width: 75rem) {
    width: 117rem;
  }
`;

export default PapersPageMainContainer;
