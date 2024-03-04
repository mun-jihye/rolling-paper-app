// import MainHeader from 'components/commons/header/MainHeader';
import React from 'react';
import styled from 'styled-components';
import GNB from 'components/commons/header/GNB';
import cardImg from 'assets/images/landingPage/cardImg.png';
import emojiImg from 'assets/images/landingPage/emojiImg.png';
import Button from 'components/commons/buttons/ButtonStyeled';

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
        <Button style={{ width: '80%' }}>구경해보기</Button>
      </Main>
    </>
  );
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2.4rem 4rem;
`;

const BlueBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #f6f8ff;
  margin: 3rem;
  width: 80%;
  border-radius: 1.6rem;
  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
  }
  @media (min-width: 375px) and (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    margin: 2.4rem;
  }
`;
const BlueBoxReverse = styled(BlueBox)`
  flex-direction: row-reverse;
  @media (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
  }
  @media (min-width: 375px) and (max-width: 767px) {
    flex-direction: column;
    margin: 2.4rem;
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
  @media (min-width: 375px) and (max-width: 767px) {
    margin: 4rem 2rem 0;
  }
`;

const MainText = styled.div`
  margin-bottom: 1.5rem;
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.gray900};
  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 0.6rem;
  }
  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 1.8rem;
  }
`;

const SubText = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.gray500};
  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 15px;
    font-weight: 400;
  }
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 9rem 0;
  @media (min-width: 375px) and (max-width: 767px) {
    width: 100%;
    height: 9rem;
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
`;

export default LandingPage;
