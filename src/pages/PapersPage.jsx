import PapersPageMainContainer from 'components/papers/PapersPageMainContainer';
import PapersPageCard from 'components/papers/PaperPageCard';
import GNB from 'components/commons/header/GNB';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import routes from 'utils/constants/routes';
import { useGetRecipientsAllQuery } from 'hooks/queries/papers/usePapersQuery';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Loader from 'components/commons/Loader';
import Error from 'components/commons/error/Error';
import Footer from 'components/list/Footer';
import ListName from 'components/list/ListName';
import PageChangeButton from 'components/list/PageChangeButton';
import PapersContainer from 'components/papers/PapersContainer';

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
          <PapersPageListName>
            모든 롤링 페이퍼 🌈
            <Link to={routes.list}>
              <GoBackButton>돌아가기</GoBackButton>
            </Link>
          </PapersPageListName>
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
      <Footer />
    </div>
  );
};

export default PapersPage;

const PapersPageListName = styled(ListName)`
  margin-left: 0;
  margin-bottom: 0;
`;

const GoBackButton = styled(PageChangeButton)`
  right: 0;

  @media (min-width: 75rem) {
    right: 1rem;
  }
`;

const ErrorContainer = styled.div`
  position: relative;
  bottom: 10rem;
`;
