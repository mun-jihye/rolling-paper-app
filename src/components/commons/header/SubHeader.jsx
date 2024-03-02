import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ArrowDown from 'assets/images/headers/ArrowDown.svg';
import AddImage from 'assets/images/headers/AddImage.svg';
import ShareImage from 'assets/images/headers/ShareImage.svg';
import Profile1 from 'assets/images/profiles/profile1.png';
import Profile2 from 'assets/images/profiles/profile2.png';
import Profile3 from 'assets/images/profiles/profile3.png';
import Toast from 'components/commons/toast/Toast';

const userData = {
  name: 'Ashley Kim',
  emotion: 'Happy',
  people: 23,
};

const SubHeader = () => {
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [showArrowOptions, setArrowShareOptions] = useState(false);
  const [showAddOptions, setShowAddOptions] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const handleShareClick = () => {
    setShowShareOptions(!showShareOptions);
    setShowAddOptions(false);
    setArrowShareOptions(false);
  };

  const handleShareKakao = () => {
    /*
    window.Kakao.Share.sendCustom({
      templateId: 104815,
      templateArgs: {
        title: 'Rolling Paper로 마음을 전해봐요',
        description: '평상시 고마웠던 지인에게 마음을 표현해봐요',
      },
    });
    */
  };

  //toast 넣어야함
  const handleShareURL = () => {
    setShowShareOptions(false);
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setShowToast(true); // Toast 활성화
      })
      .catch(err => {
        console.error('URL 복사에 실패했습니다.', err);
      });
  };

  const handleArrowClick = () => {
    setArrowShareOptions(!showArrowOptions);
    setShowAddOptions(false);
    setShowShareOptions(false);
  };
  const handleEmojiClick = e => {
    e.preventDefault();
  };

  const handleAddClick = () => {
    setShowAddOptions(!showAddOptions);
    setShowShareOptions(false);
    setArrowShareOptions(false);
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
            <StyledEmoji onClick={handleEmojiClick}>👍24</StyledEmoji>
            <StyledEmoji onClick={handleEmojiClick}>😍16</StyledEmoji>
            <StyledEmoji onClick={handleEmojiClick}>🎉10</StyledEmoji>
            {showArrowOptions && (
              <ArrowOptions>{<div>이모지</div>}</ArrowOptions>
            )}
            <StyledArrow
              onClick={handleArrowClick}
              src={ArrowDown}
              alt="Arrow"
            />
          </StyledEmojis>
          {!isMobile && (
            <StyledButtons>
              <StyledDivider2 />
              <AddButton
                src={AddImage}
                alt="추가"
                text="추가"
                onClick={handleAddClick}
              />
              {showAddOptions && <AddOptions>{<div></div>}</AddOptions>}
              <ShareButton
                onClick={handleShareClick}
                src={ShareImage}
                alt="공유"
              />
              {showShareOptions && (
                <ShareButtonList>
                  <ShareButtonText onClick={handleShareKakao}>
                    카카오톡 공유
                  </ShareButtonText>
                  <ShareButtonText onClick={handleShareURL}>
                    URL 복사
                  </ShareButtonText>
                </ShareButtonList>
              )}
            </StyledButtons>
          )}
        </StyledSection>
      </StyledContainer>
      {showToast && <Toast setIsAlert={setShowToast} toast={showToast} />}
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

const ArrowOptions = styled.div`
  position: absolute;
  width: 14rem;
  height: 10.1rem;
  border-radius: 0.8rem;
  border: 0.1rem;
  background-color: white;
  border: 0.1rem solid #cccccc;
  box-shadow: 0 0.2rem 1.2rem 0 #00000014;
  top: 120%;
  left: 1%;
  z-index: 1;
`;

const AddOptions = styled.div`
  position: absolute;
  width: 14rem;
  height: 10.1rem;
  border-radius: 0.8rem;
  border: 0.1rem;
  background-color: white;
  border: 0.1rem solid #cccccc;
  box-shadow: 0 0.2rem 1.2rem 0 #00000014;
  top: 120%;
  left: 1%;
  z-index: 1;
`;

const ShareButton = ({ src, alt, onClick }) => (
  <StyledButton onClick={onClick}>
    <img src={src} alt={alt} />
  </StyledButton>
);

const ShareButtonText = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 1.2rem 1.6rem;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.6rem;
  letter-spacing: -0.01em;
  text-align: left;
  background-color: white;
  border-radius: 0.8rem;
  margin: 0;

  &:hover {
    background-color: #cccccc;
  }
`;
const ShareButtonList = styled.div`
  position: absolute;
  width: 14rem;
  height: 10.1rem;
  border-radius: 0.8rem;
  border: 0.1rem;
  background-color: white;
  border: 0.1rem solid #cccccc;
  box-shadow: 0 0.2rem 1.2rem 0 #00000014;
  top: 120%;
  left: 15%;
  z-index: 1;
`;

const StyledContainer = styled.ul`
  height: 3.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 120rem;
  padding: 0 2rem;

  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 375px) and (max-width: 767px) {
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

  @media (max-width: 767px) {
    display: none;
  }
`;

const StyledProfile = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 14rem;
  margin-right: -0.8rem;
  border: 0.14rem solid #ffffff;

  @media (max-width: 1248px) {
    display: none;
  }
`;

const StyledProfiles = styled.div`
  display: flex;
  margin-right: 1.5rem;
  @media (max-width: 767px) {
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
  position: relative;
`;
