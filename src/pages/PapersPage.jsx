import Card from 'components/commons/cardList/Card';
import GNB from 'components/commons/header/GNB';
import mockDatas from 'data/papersPage';
import styled from 'styled-components';
import { ListPageButton, StyledFooter } from './ListPage';
import { Link } from 'react-router-dom';
import routes from 'utils/constants/routes';

const PapersPage = () => {
  return (
    <div>
      <GNB />
      <MainContainer count={mockDatas.length}>
        {mockDatas?.map(mockData => {
          return <PapersPageCard key={mockData.id} data={mockData} />;
        })}
      </MainContainer>
      <StyledFooter>
        <Link to={routes.post}>
          <ListPageButton>나도 만들어보기</ListPageButton>
        </Link>
      </StyledFooter>
    </div>
  );
};

export default PapersPage;

// 화면 크기에 따라 flex column 수 변경
const MainContainer = styled.main`
  width: 100%;
  padding-top: 10rem;
  max-width: 27.5rem;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 38.6rem) {
    max-width: 57rem;
    justify-content: ${({ count }) => (count < 2 ? 'center' : '')};
  }

  @media (min-width: 57.1rem) {
    max-width: 86.5rem;
    justify-content: ${({ count }) => (count < 3 ? 'center' : '')};
  }

  @media (min-width: 75rem) {
    max-width: 116rem;
    justify-content: ${({ count }) => (count < 4 ? 'center' : '')};
  }
`;

const PapersPageCard = styled(Card)`
  padding: 3rem 2.4rem 2rem;
  width: 27.5rem;
  height: 26rem;
  border: none;
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
    }

    & + div > div {
      width: 6.5rem;
      height: 3.6rem;

      & div {
        font-size: 1.6rem;
        line-height: 2rem;
      }
    }
  }
`;
