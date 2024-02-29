// import MainHeader from 'components/commons/header/MainHeader';
import React from 'react';
import styled from 'styled-components';
import GNB from 'components/commons/header/GNB';
import CardModal from 'components/commons/modal/CardModal';
import PrimaryBtn from 'components/commons/buttons/PrimaryBtn';
import headerEmojiImg from 'components/assets/images/landingPage/headerEmoji.png';
import emoji from 'components/assets/images/landingPage/emoji.png';
import cursorImg from 'components/assets/images/landingPage/cursor.png';

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
            <CardList>
              <CardModal />
            </CardList>
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
            <Card>
              <HeaderEmoji src={headerEmojiImg} alt="해더 이모지 이미지" />
              <Cursor src={cursorImg} alt="cursor 이미지" />
              <Emoji src={emoji} alt="이모지 이미지" />
            </Card>
          </ImgBox>
        </BlueBoxReverse>
        <PrimaryBtn>구경해보기</PrimaryBtn>
      </Main>
    </>
  );
};

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BlueBox = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f6f8ff;
  margin: 3rem;
  width: 80%;
  border-radius: 1.6rem;
  @media (max-width: 80rem) {
    flex-direction: column;
  }
`;
const BlueBoxReverse = styled(BlueBox)`
  flex-direction: row-reverse;
  @media (max-width: 80rem) {
    flex-direction: column;
  }
`;

const Point = styled.div`
  width: 8.2rem;
  padding: 0.6rem 1.2rem;
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
`;

const MainText = styled.div`
  margin-bottom: 1.5rem;
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.gray900};
  @media (max-width: 80rem) {
    display: flex;
    gap: 0.6rem;
  }
`;

const SubText = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.gray500};
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
`;

const CardList = styled.div`
  width: 47rem;
`;

const Card = styled(CardList)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 47rem;
`;

const HeaderEmoji = styled.img`
  margin-top: 5rem;
  width: 44rem;
  @media (max-width: 80rem) {
    margin: 0;
  }
`;
const Cursor = styled.img`
  position: relative;
  bottom: 4rem;
  left: 15rem;
  z-index: 100;
`;
const Emoji = styled.img`
  width: 29rem;
  position: relative;
  bottom: 5rem;
`;

export default LandingPage;
