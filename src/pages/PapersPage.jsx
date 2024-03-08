import Card from 'components/commons/cardList/Card';
import GNB from 'components/commons/header/GNB';
import styled from 'styled-components';
import {
  ListPageButton,
  StyledFooter,
  StyledHtag,
  MainContainer,
  ChangeLayoutButton,
} from './ListPage';
import { Link, useParams } from 'react-router-dom';
import routes from 'utils/constants/routes';
import { useGetRecipientsAllQuery } from 'hooks/queries/usePapersQuery';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Loader from 'components/commons/Loader';
import Error from 'components/commons/error/Error';

const LIMIT_PER_PAGE = 8;

const PapersPage = () => {
  const { sort } = useParams();

  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } =
    useGetRecipientsAllQuery(LIMIT_PER_PAGE, sort);

  const { ref, inView } = useInView();
  const paperData = data?.pages.flatMap(param => param.data.results);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
    // eslint-disable-next-line
  }, [inView]);

  return (
    <div>
      <GNB />
      {isLoading ? (
        <Loader />
      ) : (
        <PapersPageMainContainer>
          <PapersPageHtag>
            모든 롤링 페이퍼 🌈
            <Link to={routes.list}>
              <ChangeLayoutButtonInPapers>돌아가기</ChangeLayoutButtonInPapers>
            </Link>
          </PapersPageHtag>
          <PapersContainer $count={paperData?.length}>
            {paperData?.map(data => {
              return <PapersPageCard key={data.id} data={data} />;
            })}
            {isFetchingNextPage
              ? Array.from({ length: 4 }).map((_, index) => (
                  <PapersPageCard key={index + 1} isLoading={true} />
                ))
              : !isError && <div ref={ref} />}
          </PapersContainer>
        </PapersPageMainContainer>
      )}
      {isError && <ErrorContainer>{<Error />}</ErrorContainer>}
      <StyledFooter>
        <Link to={routes.post}>
          <ListPageButton>나도 만들어보기</ListPageButton>
        </Link>
      </StyledFooter>
    </div>
  );
};

export default PapersPage;

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

const ChangeLayoutButtonInPapers = styled(ChangeLayoutButton)`
  right: 0;

  @media (min-width: 75rem) {
    right: 1rem;
  }
`;

const ErrorContainer = styled.div`
  position: relative;
  bottom: 10rem;
`;
