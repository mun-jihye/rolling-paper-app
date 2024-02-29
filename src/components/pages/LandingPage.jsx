// import MainHeader from 'components/commons/header/MainHeader';
import CardModal from 'components/commons/modal/CardModal';
import React from 'react';
import styled from 'styled-components';
import headerEmojiImg from 'components/assets/images/landingPage/headerEmoji.png';
import emoji from 'components/assets/images/landingPage/emoji.png';
import GNB from 'components/commons/header/GNB';

const LandingPage = () => {
  return (
    <>
      <GNB />
      <BlueBox>
        <Text>
          <Point>Point. 01</Point>
          <div>
            <MainText>
              <div>누구나 손쉽게, 온라인</div> 롤링 페이퍼를 만들 수 있어요
            </MainText>
            <SubText>로그인 없이 자유롭게 만들어요</SubText>
          </div>
        </Text>
        <Card>
          <CardModal />
        </Card>
      </BlueBox>
      <BlueBox>
        <Text>
          <Point>Point. 02</Point>
          <div>
            <MainText>서로에게 이모지로 감정을 표현해보세요</MainText>
            <SubText>롤링 페이퍼에 이모지를 추가할 수 있어요</SubText>
          </div>
        </Text>
        <Card>
          <img src={headerEmojiImg} alt="해더 이모지 이미지" />
          <img src={emoji} alt="이모지 이미지" />
        </Card>
      </BlueBox>
    </>
  );
};

const BlueBox = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f6f8ff;
  margin: 3rem;
`;

const Point = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.2rem;
  padding: 0.6rem 1.2rem;
  border-radius: 5rem;
  background: ${({ theme }) => theme.purple600};
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem;
  gap: 3rem;
`;

const MainText = styled.div`
  width: 25rem;
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.gray900};
`;

const SubText = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.gray500};
`;

const Card = styled.div`
  width: 70rem;
`;

export default LandingPage;
