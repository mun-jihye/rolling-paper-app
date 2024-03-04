// import MainHeader from 'components/commons/header/MainHeader';
import React from 'react';
import styled from 'styled-components';
import GNB from 'components/commons/header/GNB';
import cardImg from 'assets/images/landingPage/cardImg.png';
import emojiImg from 'assets/images/landingPage/emojiImg.png';
import Button from 'components/commons/buttons/Button';
import { Link } from 'react-router-dom';
import routes from 'utils/constants/routes';

const LandingPage = () => {
  return (
    <>
      <GNB />
      <Main>
        <BlueBox>
          <TextBox>
            <Point>Point. 01</Point>
            <div>
              <MainText>
                <div>누구나 손쉽게, 온라인</div> 롤링 페이퍼를 만들 수 있어요
              </MainText>
              <SubText>로그인 없이 자유롭게 만들어요</SubText>
            </div>
          </TextBox>
          <ImgBox>
            <CardImg src={cardImg} alt="카드 이미지" />
          </ImgBox>
        </BlueBox>
        <BlueBoxReverse>
          <TextBox>
            <Point>Point. 02</Point>
            <div>
              <MainText>
                <div>서로에게 이모지로 감정을</div> 표현해보세요
              </MainText>
              <SubText>롤링 페이퍼에 이모지를 추가할 수 있어요</SubText>
            </div>
          </TextBox>
          <ImgBox>
            <EmojiImg src={emojiImg} alt="이모지 이미지" />
          </ImgBox>
        </BlueBoxReverse>
        <Link to={routes.list}>
          <Button width={'28rem'}>구경해보기</Button>
        </Link>
      </Main>
    </>
  );
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2.4rem 4rem;
  width: 100%;
`;

const BlueBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #f6f8ff;
  margin: 3rem;
  width: 120rem;
  border-radius: 1.6rem;
  @media (min-width: '1248px') {
    width: 100%;
    margin: 0 2.4rem;
  }
  @media ${({ theme }) => theme.breakpoint.tablet} {
    width: 100%;
    margin: 2.4rem;
    flex-direction: column;
  }
  @media ${({ theme }) => theme.breakpoint.mobile} {
    flex-direction: column;
    width: 100%;
    margin: 2.4rem;
  }
`;
const BlueBoxReverse = styled(BlueBox)`
  flex-direction: row-reverse;
  @media ${({ theme }) => theme.breakpoint.tablet} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.breakpoint.mobile} {
    flex-direction: column;
  }
`;

const Point = styled.div`
  width: 8rem;
  padding: 0.6rem 1rem;
  border-radius: 5rem;
  background: ${({ theme }) => theme.purple600};
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.white};
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4rem;
  gap: 3rem;
  @media ${({ theme }) => theme.breakpoint.mobile} {
    margin: 4rem 2rem 0;
  }
`;

const MainText = styled.div`
  margin-bottom: 1.5rem;
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.gray900};
  @media ${({ theme }) => theme.breakpoint.tablet} {
    gap: 0.6rem;
  }
  @media ${({ theme }) => theme.breakpoint.mobile} {
    font-size: 1.8rem;
  }
`;

const SubText = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.gray500};
  @media ${({ theme }) => theme.breakpoint.mobile} {
    font-size: 15px;
    font-weight: 400;
  }
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 9rem 0;
  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin: 0;
    margin-bottom: 4rem;
  }
  @media ${({ theme }) => theme.breakpoint.mobile} {
    width: 100%;
    height: 11rem;
    margin: 4rem 0;
    overflow: hidden;
  }
`;

const CardImg = styled.img`
  object-fit: contain;
  width: 64rem;
`;

const EmojiImg = styled(CardImg)`
  width: 47rem;
  @media ${({ theme }) => theme.breakpoint.mobile} {
    width: 100%;
  }
`;

export default LandingPage;
