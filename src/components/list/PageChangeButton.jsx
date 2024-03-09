import Button from 'components/commons/buttons/Button';
import styled from 'styled-components';

const PageChangeButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 1.2rem;
  width: auto;
  height: auto;
  padding: 0.8rem;

  @media (min-width: 48rem) {
    right: 2.4rem;
    padding: 1rem;
  }

  @media (min-width: 75rem) {
    right: 1rem;
  }
`;

export default PageChangeButton;
