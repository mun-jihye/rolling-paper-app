import React from 'react';
import MainHeader from 'components/commons/header/MainHeader';
import CardList from 'components/commons/cardList/CardList';
import styled from 'styled-components';
import PrimaryBtn from 'components/commons/buttons/PrimaryBtn';
import useDeviceType from 'hooks/useDeviceType';

const ListPage = () => {
  const deviceType = useDeviceType();
  return (
    <div>
      <MainHeader />
      <PageContainer>
        <SectionConainer>
          <StyledHtag>인기 롤링 페이퍼 🔥</StyledHtag>
          <CardList
            carouselMargin={
              deviceType === 'PC' ? 0 : deviceType === 'Tablet' ? 2.4 : 2
            }
          />
        </SectionConainer>
        <SectionConainer>
          <StyledHtag>최근에 만든 롤링 페이퍼⭐️</StyledHtag>
          <CardList
            carouselMargin={
              deviceType === 'PC' ? 0 : deviceType === 'Tablet' ? 2.4 : 2
            }
          />
        </SectionConainer>
        <StyledFooter>
          <ListPagePrimaryBtn>나도 만들어보기</ListPagePrimaryBtn>
        </StyledFooter>
      </PageContainer>
    </div>
  );
};

export default ListPage;

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5.4rem;
  padding-top: 4rem;
  padding-bottom: 4.2rem;

  @media (min-width: 48rem) {
    gap: 3rem;
    padding-top: 5rem;
    padding-bottom: 13.2rem;
  }

  @media (min-width: 75rem) {
    padding-bottom: 4rem;
  }
`;

const SectionConainer = styled.section`
  @media (min-width: 75rem) {
    margin: 0 auto;
  }
`;

const StyledHtag = styled.h1`
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

const StyledFooter = styled.footer`
  padding: 2.4rem 2rem;

  @media (min-width: 48rem) {
    padding: 2.4rem;
  }

  @media (min-width: 75rem) {
    padding-right: 0;
    padding-left: 0;
  }
`;

const ListPagePrimaryBtn = styled(PrimaryBtn)`
  width: 100%;
  max-widht: 116rem;
  transition: transform 0.5s;

  @media (min-width: 75rem) {
    width: 28rem;
    height: 5.6rem;
    display: block;
    margin: 0 auto;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.8rem;
    letter-spacing: -0.018rem;
  }
`;
