import React from 'react';
import styled from 'styled-components';
import ArrowDown from 'assets/images/headers/ArrowDown.svg';
import AddImage from 'assets/images/headers/AddImage.svg';
import ShareImage from 'assets/images/headers/ShareImage.svg';
import Profile1 from 'assets/images/profiles/profile1.png';
import Profile2 from 'assets/images/profiles/profile2.png';
import Profile3 from 'assets/images/profiles/profile3.png';
//useRef, useState 추가
import { useState } from 'react';

const userData = {
  name: 'Ashley Kim',
  emotion: 'Happy',
  people: 23,
};

//리사이즈 이벤트, 

const SubHeader = () => {
  //참조용
  const handleClick = e => {
    e.preventDefault();
  };

  const [showShareOptions, setShowShareOptions] = useState(false);

  //쉐어 버튼
  const handleClickShare = () => {
    setShowShareOptions(!showShareOptions);
  };

  //카카오 공유하기
  const handleShareKakao = e => {
    e.preventDefault();
  };

  //URL 복사하기
  const handleShareURL = e => {
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
            <AddButton
              src={AddImage}
              alt="추가"
              onClick={handleClick}
              text="추가"
            />
            <ShareButton
              onClick={handleClickShare}
              src={ShareImage}
              alt="공유"
            />
            {showShareOptions && (
              <ShareButtonList>
                <div onClick={handleShareKakao}>카카오톡 공유</div>
                <div onClick={handleShareURL}>URL 복사</div>
              </ShareButtonList>
            )}
          </StyledButtons>
        </StyledSection>
      </StyledContainer>
    </>
  );
};

export default SubHeader;

const AddButton = ({ src, alt, onClick, text }) => (
  <StyledButton onClick={onClick}>
    <img src={src} alt={alt} />
    {text}
  </StyledButton>
);

const ShareButton = ({ src, alt, onClick }) => (
  <StyledButton onClick={onClick}>
    <img src={src} alt={alt} />
  </StyledButton>
);

const ShareButtonList = styled.div`
  position: absolute;
  width: 14rem;
  height: 12rem;
  top: 11rem;
  left: 130.1rem;
  padding: 1rem 0.1rem 1rem 1rem;
  border-radius: 0.8rem;
  border: 0.1rem;

  border: 0.1rem solid #cccccc;
  box-shadow: 0px 2px 12px 0px #00000014;
`;

const StyledContainer = styled.ul`
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

  @media (max-width: 124.8rem) {
    padding: 0;
  }
`;

const StyledProfileNum = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  left: 4.8rem;
  border: 0.1rem;
  background: #ffffff;
  border: 0.1rem solid #e3e3e3;
  border-radius: 14rem;
  font-family: Pretendard;
  font-size: 1.2rem;
  line-height: 1.8rem;
  text-align: left;
  padding: 0.4rem 0.4rem;

  @media (max-width: 124.8rem) {
    display: none;
  }
`;

const StyledProfile = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 14rem;
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
  @media (max-width: 76.8rem) {
    display: none;
  }
`;

const StyledDivider = styled.div`
  height: 2.5rem;
  width: 0.1rem;
  background-color: ${({ theme }) => theme.gray200};
  margin: 0 1rem;

  @media (max-width: 76.8rem) {
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
  color: white;

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
