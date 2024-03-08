import Card from 'components/commons/cardList/Card';
import styled from 'styled-components';

const PapersPageCard = styled(Card)`
  padding: 3rem 2.4rem 2rem;
  width: 27.5rem;
  height: 26rem;
  background-size: ${({ data }) =>
    data?.backgroundImageURL ? 'cover' : '14.2rem'};

  & h3 {
    font-size: 2.4rem;
    line-height: 3.6rem;
    letter-spacing: -0.024rem;
  }

  & span {
    font-size: 1.6rem;
    line-height: 2.6rem;
    letter-spacing: -0.016rem;
  }

  & hr {
    margin-top: 4.3rem;

    & + div {
      gap: 0.8rem;
      height: 3.6rem;
    }

    & + div > div {
      height: 3.6rem;
      padding: 0.8rem 1.2rem;

      & div {
        font-size: 1.6rem;
        line-height: 2.3rem;
      }

      & div:first-child {
        line-height: 2.4rem;
      }
    }
  }
`;

export default PapersPageCard;
