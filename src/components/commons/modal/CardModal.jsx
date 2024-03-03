import React from 'react';
import Profile from '../Profile';
import profile from 'assets/images/profiles/profile1.png';
import styled from 'styled-components';
import Date from '../cards/Date';
import FromTitle from '../cards/FromTitle';
import CardMessage from '../cards/CardMessage';

const data = {
  date: '2023.07.08',
  message:
    '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요코로나가 또다시 기승을 부리는 요즘이네요. 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요건강, 체력 모두 조심 또 하세요',
};
const CardModal = () => {
  return (
    <>
      <Header>
        <FlexContainer>
          <Profile src={profile} isModal={true} />
          <FromTitle />
        </FlexContainer>
        <Date date={data.date} />
      </Header>
      <Hr />
      <CardMessage message={data.message} />
    </>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const Hr = styled.hr`
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.gray200};
`;
export default CardModal;
