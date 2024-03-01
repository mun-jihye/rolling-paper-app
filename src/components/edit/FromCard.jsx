import React from 'react';
import profile from 'assets/images/profiles/profile1.png';
import { CardContainer } from './CardContainer';
import Profile from 'components/commons/Profile';
import FromTitle from 'components/commons/cards/FromTitle';
import CardMessage from 'components/commons/cards/CardMessage';
import Date from 'components/commons/cards/Date';
import styled from 'styled-components';

const data = {
  date: '2023.07.08',
  message:
    '코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요코로나가 또다시 기승을 부리는 요즘이네요. 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요건강, 체력 모두 조심 또 하세요',
};

const FromCard = () => {
  return (
    <CardContainer>
      <Header>
        <FlexContainer>
          <Profile src={profile} isModal={true} />
          <FromTitle />
        </FlexContainer>
      </Header>
      <Hr />
      <Content>
        <CardMessage message={data.message} />
        <Date date={data.date} />
      </Content>
    </CardContainer>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
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
  margin-bottom: 1.5rem;
  background-color: ${({ theme }) => theme.gray200};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export default FromCard;
