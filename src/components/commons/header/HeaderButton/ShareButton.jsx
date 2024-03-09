import React, { useState } from 'react';
import styled from 'styled-components';
import { errorAlert } from 'utils/errorAlert';
import Toast from '../../toast/Toast';
import ShareImage from 'assets/images/headers/ShareImage.svg';
import { StyledButton } from '../HeaderStyled/ButtonContainer';

const Share = ({
  setArrowShareOptions,
  setShowEmojiPicker,
  showShareOptions,
  setShowShareOptions,
  shareOptionsRef,
}) => {
  const [showToast, setShowToast] = useState(false);
  const kakaoKey = process.env.REACT_APP_KAKAO_KEY;

  const handleShareClick = () => {
    setShowShareOptions(!showShareOptions);
    setArrowShareOptions(false);
    setShowEmojiPicker(false);
  };

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
      errorAlert({ title: '카카오톡 공유 실패' });
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
        errorAlert({ title: 'url 복사 실패' });
      });
  };

  return (
    <>
      <ShareButton src={ShareImage} alt="Share" onClick={handleShareClick} />
      {showShareOptions && (
        <>
          <ShareButtonList ref={shareOptionsRef}>
            <ShareButtonText onClick={handleShareKakao}>
              카카오톡 공유
            </ShareButtonText>
            <ShareButtonText onClick={handleShareURL}>URL 복사</ShareButtonText>
          </ShareButtonList>
        </>
      )}
      {showToast && <Toast setIsAlert={setShowToast} toast={showToast} />}
    </>
  );
};

const ShareButton = ({ src, alt, onClick }) => (
  <StyledButton onClick={onClick}>
    <img src={src} alt={alt} />
  </StyledButton>
);
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
const ShareButtonText = styled.div`
  cursor: pointer;
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

export default Share;
