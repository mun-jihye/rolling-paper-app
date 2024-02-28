import React from 'react';
import Profile from '../Profile';
import profile from 'components/assets/images/profiles/profile1.png';
import styled from 'styled-components';

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
          <Title>
            <div>
              {`From. `}
              <strong>김동훈</strong>
            </div>
            <div>벳지</div>
          </Title>
        </FlexContainer>
        <Date>{data.date}</Date>
      </Header>
      <Hr />
      <Message>{data.message}</Message>
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
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 2rem;
  line-height: 2.4rem;
`;
const Date = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.5%;
  color: ${({ theme }) => theme.gray400};
`;
const Hr = styled.hr`
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.gray200};
`;
const Message = styled.div`
  padding: 2rem 0;
  font-size: 1.8rem;
  line-height: 2.8rem;
  letter-spacing: -0.01%;
  color: #5a5a5a;
  max-height: 24rem;
  overflow: scroll;
`;
export default CardModal;
