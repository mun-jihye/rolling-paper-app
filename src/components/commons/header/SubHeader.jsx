import React, { useState, useRef } from 'react';
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

//data 넘겨 받기
const SubHeader = () => {
  //데이터 넘겨받으면 삭제
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
  const userReactions = response?.data?.topReactions?.slice(0, 8) || [];

  const [showShareOptions, setShowShareOptions] = useState(false);
  const [showArrowOptions, setArrowShareOptions] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  //출력 콘솔이 너무 많이 찍혀서 주석 처리
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
      <ToUser>To. {recipientName}</ToUser>
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

        <StyledButtons>
          {showArrowOptions && (
            <ArrowOptions ref={arrowOptionsRef}>
              {userReactions.map((reaction, index) => (
                <EmojiBadge key={index} data={reaction} />
              ))}
            </ArrowOptions>
          )}
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
          <StyledDivider2 />

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
  z-index: 200;
  @media ${({ theme }) => theme.breakpoint.mobile} {
    right: 195%;
  }
`;

const AddButton = ({ src, alt, onClick, text }) => (
  <StyledButton onClick={onClick}>
    <img src={src} alt={alt} />
    <AddText>{text}</AddText>
  </StyledButton>
);

const AddText = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

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
  top: 120%;
  right: 105%;
  z-index: 200;
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
  @media ${({ theme }) => theme.breakpoint.mobile} {
    width: 138px;
    height: 50px;
    padding: 12px 16px 12px 16px;
    gap: 10px;
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
  top: 120%;
  left: 24%;
  z-index: 200;
  @media ${({ theme }) => theme.breakpoint.mobile} {
    left: -30%;
  }
`;

const StyledContainer = styled.ul`
  height: 5.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 124.2rem;
  padding: 0 2rem;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    padding: 2.4rem;
  }
`;

const StyledSection = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  @media ${({ theme }) => theme.breakpoint.mobile} {
    gap: auto;
    width: 100%;
  }
`;

const ToUser = styled.div`
  display: flex;
  font-family: Pretendard;
  font-size: 2.8rem;
  font-weight: 500;
  line-height: auto;
  text-align: left;
  margin-bottom: 1.2rem;

  @media ${({ theme }) => theme.breakpoint.mobile} {
    display: none;
  }
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

  @media ${({ theme }) => theme.breakpoint.tablet} {
    display: none;
  }
`;

const StyledProfile = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 14rem;
  margin-right: -0.8rem;
  border: 0.14rem solid ${({ theme }) => theme.white};

  @media ${({ theme }) => theme.breakpoint.tablet} {
    display: none;
  }
`;

const StyledProfiles = styled.div`
  display: flex;
  margin-right: 1.5rem;
  @media ${({ theme }) => theme.breakpoint.mobile} {
    display: none;
  }
`;

const StyledMessage = styled.div`
  font-family: Pretendard;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.8rem;
  display: flex;
  @media ${({ theme }) => theme.breakpoint.tablet} {
    display: none;
  }

  @media ${({ theme }) => theme.breakpoint.mobile} {
    display: none;
  }
`;

const StyledEmp = styled.p`
  font-weight: 900;
  @media ${({ theme }) => theme.breakpoint.mobile} {
    display: none;
  }
`;

const StyledDivider = styled.div`
  height: 2.5rem;
  width: 0.15rem;
  background-color: ${({ theme }) => theme.gray200};
  margin: 0 2rem;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    display: none;
  }

  @media ${({ theme }) => theme.breakpoint.mobile} {
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
  gap: 0.9rem;

  @media ${({ theme }) => theme.breakpoint.mobile} {
    padding: 0.6rem 0.8rem;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 2.15rem;
  position: relative;

  @media ${({ theme }) => theme.breakpoint.mobile} {
    gap: 1.6rem;
  }
`;
