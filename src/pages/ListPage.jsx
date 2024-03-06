import React from 'react';
import CardList from 'components/commons/cardList/CardList';
import styled from 'styled-components';
import useDeviceType from 'hooks/useDeviceType';
import { Link } from 'react-router-dom';
import routes from 'utils/constants/routes';
import GNB from 'components/commons/header/GNB';
import Button from 'components/commons/buttons/Button';
import { useGetRecipientsInOrderQuery } from 'hooks/queries/useListQuery';

const ListPage = () => {
  const deviceType = useDeviceType();

  const {
    data: lastestList,
    isLoading: isLastestListLoading,
    isError: isLastestListError,
  } = useGetRecipientsInOrderQuery();

  const {
    data: topRatedList,
    isLoading: isTopRatedListLoading,
    isError: isTopRatedListError,
  } = useGetRecipientsInOrderQuery('like');

  return (
    <div>
      <GNB />
      <MainContainer>
        <SectionConainer>
          <StyledHtag>
            인기 롤링 페이퍼 🔥
            <Link to={routes.papers}>
              <ChangeLayoutButton>전체 보기</ChangeLayoutButton>
            </Link>
          </StyledHtag>
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
          <StyledHtag>최근에 만든 롤링 페이퍼 ⭐️</StyledHtag>
          <CardList
            carouselMargin={
              deviceType === 'PC' ? 0 : deviceType === 'Tablet' ? 2.4 : 2
            }
            data={lastestList?.data?.results}
            isLoading={isLastestListLoading}
            isError={isLastestListError}
          />
        </SectionConainer>
      </MainContainer>
      <StyledFooter>
        <Link to={routes.post}>
          <ListPageButton>나도 만들어보기</ListPageButton>
        </Link>
      </StyledFooter>
    </div>
  );
};

export default ListPage;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5.4rem;
  padding-top: 4rem;
  padding-bottom: 14.6rem;

  @media (min-width: 48rem) {
    gap: 3rem;
    padding-top: 5rem;
    padding-bottom: 23.6rem;
  }

  @media (min-width: 75rem) {
    padding-bottom: 14.4rem;
  }
`;

const SectionConainer = styled.section`
  @media (min-width: 75rem) {
    margin: 0 auto;
  }
`;

export const StyledHtag = styled.h1`
  position: relative;
  color: ${({ theme }) => theme.black};
  font-size: 2rem;
  font-weight: 600;
  line-height: 3rem;
  margin-bottom: 0.2rem;
  margin-left: 2rem;

  @media (min-width: 48rem) {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.6rem;
    letter-spacing: -0.024rem;
    margin-bottom: 0.6rem;
    margin-left: 2.4rem;
  }

  @media (min-width: 75rem) {
    margin-left: 0;
  }
`;

export const StyledFooter = styled.footer`
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

export const ListPageButton = styled(Button)`
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

export const ChangeLayoutButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  width: auto;
  height: auto;
  padding: 0.8rem;

  @media (min-width: 48rem) {
    padding: 1rem;
  }

  @media (min-width: 75rem) {
    right: 1rem;
  }
`;
