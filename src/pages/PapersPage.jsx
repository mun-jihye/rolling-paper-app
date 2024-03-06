import Card from 'components/commons/cardList/Card';
import GNB from 'components/commons/header/GNB';
import mockDatas from 'data/papersPage';
import styled from 'styled-components';
import {
  ListPageButton,
  StyledFooter,
  StyledHtag,
  MainContainer,
  ChangeLayoutButton,
} from './ListPage';
import { Link } from 'react-router-dom';
import routes from 'utils/constants/routes';

const PapersPage = () => {
  return (
    <div>
      <GNB />
      <PapersPageMainContainer>
        <PapersPageHtag>
          모든 롤링 페이퍼 🌈
          <Link to={routes.list}>
            <ChangeLayoutButton>돌아가기</ChangeLayoutButton>
          </Link>
        </PapersPageHtag>
        <PapersContainer $count={mockDatas.length}>
          {mockDatas?.map(mockData => {
            return <PapersPageCard key={mockData.id} data={mockData} />;
          })}
        </PapersContainer>
      </PapersPageMainContainer>
      <StyledFooter>
        <Link to={routes.post}>
          <ListPageButton>나도 만들어보기</ListPageButton>
        </Link>
      </StyledFooter>
    </div>
  );
};

export default PapersPage;

// 화면 크기에 따라 flex column 수 변경되도록 width 조절
const PapersPageMainContainer = styled(MainContainer)`
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

// 첫 줄의 Card 개수가 column 을 전부 채우지 못하는 경우 가운데 정렬
const PapersContainer = styled.main`
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

const PapersPageHtag = styled(StyledHtag)`
  margin-left: 0;
  margin-bottom: 0;
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
