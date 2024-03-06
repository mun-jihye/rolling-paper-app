import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ArrowDown from 'assets/images/headers/ArrowDown.svg';
import AddImage from 'assets/images/headers/AddImage.svg';
import ShareImage from 'assets/images/headers/ShareImage.svg';
import Toast from 'components/commons/toast/Toast';
import useCloseModal from 'hooks/useCloseModal';
import EmojiPicker from 'emoji-picker-react';
import EmojiBadge from 'components/commons/badges/EmojiBadge';

import { useQuery } from 'react-query';
import { getRecipient } from 'api/recipient';

const SubHeader = ({ datas }) => {
  const recipientId = 4114;

  const {
    data: response,
    isLoading,
    error,
  } = useQuery(['recipient', recipientId], () => getRecipient(recipientId));

  const recipientName = response ? response.data.name : 'Unknown';
  const recipientCount = response ? response.data.messageCount : '0';
  const topReactions = response?.data?.topReactions?.slice(0, 3) || [];
  const topProfileImages = response?.data?.recentMessages
    .slice(0, 3)
    .map(msg => msg.profileImageURL);

  const [showShareOptions, setShowShareOptions] = useState(false);
  const [showArrowOptions, setArrowShareOptions] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showToast, setShowToast] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  //selectEmoji 출력
  // console.log(selectedEmoji);

  //Ref사용해서 Dom요소 참조하기
  const shareOptionsRef = useRef();
  const arrowOptionsRef = useRef();
  const emojiPickerRef = useRef();

  //Modal 닫기 훅 사용
  useCloseModal(
    showShareOptions,
    () => setShowShareOptions(false),
    shareOptionsRef,
  );
  useCloseModal(
    showArrowOptions,
    () => setArrowShareOptions(false),
    arrowOptionsRef,
  );
  useCloseModal(
    showEmojiPicker,
    () => setShowEmojiPicker(false),
    emojiPickerRef,
  );

  //모바일 환경 감지
  const isMobile = windowWidth < 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //핸들러 함수들
  const handleShareClick = () => {
    setShowShareOptions(!showShareOptions);
    setArrowShareOptions(false);
    setShowEmojiPicker(false);
  };

  const kakaoKey = process.env.REACT_APP_KAKAO_KEY;

  const handleShareKakao = () => {
    try {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(kakaoKey);
      }

      window.Kakao.Link.sendCustom({
        templateId: 104962,
        templateArgs: {
          title: 'Rolling Paper로 마음을 전해봐요',
          description: '평상시 고마웠던 지인에게 마음을 표현해봐요',
        },
      });
    } catch (error) {
      console.error('카카오 공유 기능 에러:', error);
    }
  };

  const handleShareURL = () => {
    setShowShareOptions(false);
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setShowToast(true);
      })
      .catch(err => {
        console.error('URL 복사에 실패했습니다.', err);
      });
  };

  const handleArrowClick = () => {
    setArrowShareOptions(!showArrowOptions);
    setShowEmojiPicker(false);
    setShowShareOptions(false);
  };

  const handleAddClick = () => {
    setShowEmojiPicker(!showEmojiPicker);
    setShowShareOptions(false);
    setArrowShareOptions(false);
  };

  const onEmojiClick = emojiObject => {
    setSelectedEmoji(emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  if (isLoading) return <div>데이터를 불러오는 중...</div>;
  if (error)
    return <div>데이터를 불러오는데 실패했습니다: {console.log(error)}</div>;

  return (
    <StyledContainer>
      <StyledSection>
        <ToUser>To. {recipientName}</ToUser>
      </StyledSection>
      <StyledSection>
        <StyledProfiles>
          {/* 프로필 이미지들 */}
          {topProfileImages.map((image, index) => (
            <StyledProfile key={index} src={image} alt={`Profile ${index}`} />
          ))}
          <StyledProfileNum>+{recipientCount - 3}</StyledProfileNum>
        </StyledProfiles>
        <StyledMessage>
          <StyledEmp>{recipientCount}</StyledEmp>명이 작성했어요!
        </StyledMessage>
        <StyledDivider />
        <StyledEmojis>
          {/* 이모지 버튼들 */}
          {topReactions.map((reaction, index) => (
            <EmojiBadge key={index} data={reaction} />
          ))}
          <StyledArrow onClick={handleArrowClick} src={ArrowDown} alt="Arrow" />
        </StyledEmojis>
        {!isMobile && (
          <StyledButtons>
            {showArrowOptions && (
              <ArrowOptions ref={arrowOptionsRef}>
                {topReactions.map((reaction, index) => (
                  <EmojiBadge key={index} data={reaction} />
                ))}
              </ArrowOptions>
            )}
            <StyledDivider2 />
            <AddButton
              src={AddImage}
              alt="Add"
              text="추가"
              onClick={handleAddClick}
            />
            {showEmojiPicker && (
              <StyledEmojiPicker ref={emojiPickerRef}>
                <EmojiPicker onEmojiClick={onEmojiClick} />{' '}
              </StyledEmojiPicker>
            )}

            <ShareButton
              src={ShareImage}
              alt="Share"
              onClick={handleShareClick}
            />
            {showShareOptions && (
              <ShareButtonList ref={shareOptionsRef}>
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
      {showToast && <Toast setIsAlert={setShowToast} toast={showToast} />}
    </StyledContainer>
  );
};

export default SubHeader;

const StyledEmojiPicker = styled.div`
  position: absolute;
  width: 14rem;
  height: 10.1rem;
  top: 120%;
  right: 114%;
  z-index: 10;
`;

const AddButton = ({ src, alt, onClick, text }) => (
  <StyledButton onClick={onClick}>
    <img src={src} alt={alt} />
    {text}
  </StyledButton>
);

const ArrowOptions = styled.div`
  position: absolute;
  display: flex;
  gap: 1rem;
  width: auto;
  height: auto;
  border-radius: 0.8rem;
  border: 0.1rem;
  background-color: ${({ theme }) => theme.white};
  border: 0.1rem solid ${({ theme }) => theme.gray300};
  box-shadow: 0 0.2rem 1.2rem 0 ${({ theme }) => theme.gray200};
  top: 120%;
  right: 105%;
  z-index: 10;
  padding: 2.4rem;
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
  background-color: ${({ theme }) => theme.white};
  border-radius: 0.8rem;
  margin: 0;

  &:hover {
    background-color: ${({ theme }) => theme.gray200};
  }
`;

const ShareButtonList = styled.div`
  position: absolute;
  width: 14rem;
  height: 10.1rem;
  border-radius: 0.8rem;
  border: 0.1rem;
  background-color: ${({ theme }) => theme.white};
  border: 0.1rem solid ${({ theme }) => theme.gray300};
  box-shadow: 0 0.2rem 1.2rem 0 ${({ theme }) => theme.gray200};
  top: 120%;
  left: 24%;
  z-index: 10;
`;

const StyledContainer = styled.ul`
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 124.8rem;
  padding: 0 2rem;
  margin-bottom: 0.8rem;

  @media (min-width: 768px) {
    padding: 2.4rem;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    padding: 0 2.4;
  }
`;

const StyledSection = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ToUser = styled.div`
  display: flex;
  font-family: Noto;
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: auto;
  text-align: left;
  padding: 0 0.2rem;
`;

const StyledProfileNum = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  left: 4.8rem;
  border: 0.1rem;
  background: ${({ theme }) => theme.white};
  border: 0.1rem solid ${({ theme }) => theme.gray200};
  border-radius: 14rem;
  font-family: Pretendard;
  font-size: 1.2rem;
  line-height: 1.8rem;
  text-align: left;
  padding: 0.4rem 0.4rem;

  @media (max-width: 1248px) {
    display: none;
  }
`;

const StyledProfile = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 14rem;
  margin-right: -0.8rem;
  border: 0.14rem solid ${({ theme }) => theme.white};

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

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledDivider2 = styled.div`
  height: 2.5rem;
  width: 0.1rem;
  background-color: ${({ theme }) => theme.gray200};
`;

const StyledEmojis = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

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
  background: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.gray400};
  text-align: center;
  gap: 0.8rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 2.15rem;
  position: relative;
`;
