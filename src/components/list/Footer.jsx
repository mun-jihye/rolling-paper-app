import Button from 'components/commons/buttons/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import routes from 'utils/constants/routes';

const Footer = () => {
  return (
    <StyledFooter>
      <Link to={routes.post}>
        <ListPageButton>나도 만들어보기</ListPageButton>
      </Link>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 2.4rem 2rem;

  @media (min-width: 48rem) {
    padding: 2.4rem;
  }

  @media (min-width: 75rem) {
    padding-right: 0;
    padding-left: 0;
  }
`;

const ListPageButton = styled(Button)`
  position: static;
  width: 100%;
  height: 5.6rem;
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: -0.018rem;
  line-height: 2.8rem;

  @media (min-width: 48rem) {
    font-weight: 700;
  }

  @media (min-width: 75rem) {
    width: 28rem;
    display: block;
    margin: 0 auto;
  }
`;

export default Footer;
