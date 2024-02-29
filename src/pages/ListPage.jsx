import React from 'react';
import MainHeader from 'components/commons/header/MainHeader';
import CardList from 'components/commons/cardList/CardList';
import styled from 'styled-components';
import PrimaryBtn from 'components/commons/buttons/PrimaryBtn';

const ListPage = () => {
  return (
    <div>
      <MainHeader />
      <StyledHtag>인기 롤링 페이퍼 🔥</StyledHtag>
      <CardList />
      <StyledHtag>최근에 만든 롤링 페이퍼⭐️</StyledHtag>
      <CardList />
      <StyledFooter>
        <PrimaryBtn>나도 만들어보기</PrimaryBtn>
      </StyledFooter>
    </div>
  );
};

export default ListPage;

const StyledHtag = styled.h1`
  color: ${({ theme }) => theme.black};
  font-size: 2rem;
  font-weight: 600;
  line-height: 3rem;
  margin-bottom: 1.2rem;
`;

const StyledFooter = styled.footer`
  padding: 2.4rem 2rem;
`;
