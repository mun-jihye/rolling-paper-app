import React from 'react';
import styled from 'styled-components';
import ArrowDown from 'components/assets/images/headers/ArrowDown.svg';
import AddImage from 'components/assets/images/headers/AddImage.svg';
import ShareImage from 'components/assets/images/headers/ShareImage.svg';
import Profile1 from 'components/assets/images/profiles/profile1.png';
import Profile2 from 'components/assets/images/profiles/profile2.png';
import Profile3 from 'components/assets/images/profiles/profile3.png';

// mockData로 옮겨야함
// 모바일 페이지마다 다른 css 구현
// 서브 헤더 버튼 클릭 이벤트
const userData = {
  name: 'Ashley Kim',
  emotion: 'Happy',
  people: 23,
};

const SubHeader = () => {
  const handleClick = e => {
    e.preventDefault();
  };

  return (
    <>
      <StyledContainer>
        <ToUser>To. {userData.name}</ToUser>
        <StyledSection>
          <StyledProfiles>
            {[Profile1, Profile2, Profile3].map((profile, index) => (
              <StyledProfile key={index} src={profile} alt="Profile" />
            ))}
            <StyledProfileNum>+6</StyledProfileNum>
          </StyledProfiles>
          <StyledMessage>
            <StyledEmp>{userData.people}</StyledEmp>명이 작성했어요!
          </StyledMessage>
          <StyledDivider />
          <StyledEmojis>
            <StyledEmoji onClick={handleClick}>👍24</StyledEmoji>
            <StyledEmoji onClick={handleClick}>😍16</StyledEmoji>
            <StyledEmoji onClick={handleClick}>🎉10</StyledEmoji>
            <StyledArrow src={ArrowDown} alt="More" />
          </StyledEmojis>
          <StyledButtons>
            <StyledDivider2 />
            <AddShreButton
              src={AddImage}
              alt="추가"
              onClick={handleClick}
              text="추가"
            />
            <AddShreButton src={ShareImage} alt="공유" onClick={handleClick} />
          </StyledButtons>
        </StyledSection>
      </StyledContainer>
    </>
  );
};

export default SubHeader;

const AddShreButton = ({ src, alt, onClick, text }) => (
  <StyledButton onClick={onClick}>
    <img src={src} alt={alt} />
  </StyledButton>
);

const StyledContainer = styled.div`
  height: 3.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 120rem;
  padding: 0 2rem;

  @media (max-width: 124.8rem) {
    padding: 0 1.5rem;
  }

  @media (max-width: 76.8rem) {
    padding: 0 1rem;
  }
`;

const StyledSection = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

const ToUser = styled.div`
  display: flex;
  font-family: Pretendard;
  font-size: 2.6rem;
  font-weight: 900;
  line-height: auto;
  text-align: left;
  padding: 0 1rem;

  @media (max-width: 1248px) {
    padding: 0;
  }
`;

const StyledProfileNum = styled.div`
  width: 28px;
  height: 28px;
  left: 48px;
  border: 1px;
  background: #ffffff;
  border: 1px solid #e3e3e3;
  border-radius: 140px;
  font-family: Pretendard;
  font-size: 12px;
  line-height: 18px;
  text-align: left;
  padding: 4px 4px;
  @media (max-width: 1248px) {
    display: none;
  }
`;

const StyledProfile = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 140px;
  margin-right: -0.8rem;
  border: 1.4px solid #ffffff;
  @media (max-width: 1248px) {
    display: none;
  }
`;

const StyledProfiles = styled.div`
  display: flex;
  margin-right: 1.5rem;
  @media (max-width: 1248px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledMessage = styled.div`
  font-family: Pretendard;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.8rem;
  display: flex;
  @media (max-width: 1248px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledEmp = styled.p`
  font-weight: 900;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledDivider = styled.div`
  height: 2.5rem;
  width: 0.1rem;
  background-color: ${({ theme }) => theme.gray200};
  margin: 0 1rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledDivider2 = styled.div`
  height: 2.5rem;
  width: 0.1rem;
  background-color: ${({ theme }) => theme.gray200};
`;

const StyledEmoji = styled.button`
  width: 6.3rem;
  height: 3.6rem;
  padding: 0.8rem 1.2rem;
  border-radius: 3.2rem;
  background-color: ${({ theme }) => theme.gray400};
  margin-right: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledEmojis = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledArrow = styled.img`
  height: 2.4rem;
  width: 2.4rem;
  margin-right: 1rem;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  height: 3.6rem;
  padding: 0.6rem 1.6rem;
  border-radius: 0.6rem;
  background: #ffffff;
  border: 1px solid #cccccc;
  text-align: center;
  gap: 1rem;
`;

const StyledButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;
