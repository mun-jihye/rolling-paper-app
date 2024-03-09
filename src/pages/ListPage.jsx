import React from 'react';
import CardList from 'components/commons/cardList/CardList';
import styled from 'styled-components';
import useDeviceType from 'hooks/useDeviceType';
import { Link } from 'react-router-dom';
import routes from 'utils/constants/routes';
import GNB from 'components/commons/header/GNB';
import { useGetRecipientsInOrderQuery } from 'hooks/queries/list/useListQuery';
import Footer from 'components/list/Footer';
import ListPageMainContainer from 'components/list/ListPageMainContainer';
import ListName from 'components/list/ListName';
import PageChangeButton from 'components/list/PageChangeButton';

const ListPage = () => {
  const deviceType = useDeviceType();

  const {
    data: topRatedList,
    isLoading: isTopRatedListLoading,
    isError: isTopRatedListError,
  } = useGetRecipientsInOrderQuery('like');

  const {
    data: lastestList,
    isLoading: isLastestListLoading,
    isError: isLastestListError,
  } = useGetRecipientsInOrderQuery('date');

  return (
    <div>
      <GNB />
      <ListPageMainContainer>
        <SectionConainer>
          <ListName>
            인기 롤링 페이퍼 🔥
            <Link to={`${routes.papers}/like`}>
              <PageChangeButton>전체 보기</PageChangeButton>
            </Link>
          </ListName>
          <CardList
            carouselMargin={
              deviceType === 'PC' ? 0 : deviceType === 'Tablet' ? 2.4 : 2
            }
            data={topRatedList?.data?.results}
            isLoading={isTopRatedListLoading}
            isError={isTopRatedListError}
          />
        </SectionConainer>
        <SectionConainer>
          <ListName>
            최근에 만든 롤링 페이퍼 ⭐️
            <Link to={`${routes.papers}/date`}>
              <PageChangeButton>전체 보기</PageChangeButton>
            </Link>
          </ListName>
          <CardList
            carouselMargin={
              deviceType === 'PC' ? 0 : deviceType === 'Tablet' ? 2.4 : 2
            }
            data={lastestList?.data?.results}
            isLoading={isLastestListLoading}
            isError={isLastestListError}
          />
        </SectionConainer>
      </ListPageMainContainer>
      <Footer />
    </div>
  );
};

export default ListPage;

const SectionConainer = styled.section`
  @media (min-width: 75rem) {
    margin: 0 auto;
  }
`;
