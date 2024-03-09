import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import AddImage from 'assets/images/headers/AddImage.svg';
import useCloseModal from 'hooks/useCloseModal';
import EmojiPicker from 'emoji-picker-react';
import EmojiBadge from 'components/commons/badges/EmojiBadge';
import { useGetReactionQuery } from 'hooks/queries/reaction/useGetReactionQuery';
import { usePostReactionQuery } from 'hooks/queries/reaction/usePostReactionQuery';
import { useParams } from 'react-router-dom';
import TopEmoji from './TopEmoji';
import { StyledButton, StyledButtons } from './ButtonContainer';
import Share from './Share';

const SubHeader = ({ data }) => {
  const { postId } = useParams();
  const { data: reaction } = useGetReactionQuery(postId);
  const postReaction = usePostReactionQuery(postId);

  const recipientName = data ? data.name : 'Unknown';
  const recipientCount = data ? data.messageCount : '0';
  const topProfileImages = data?.recentMessages
    .slice(0, 3)
    .map(msg => msg.profileImageURL);
  const topReactions = reaction?.data.results.slice(0, 3) || [];
  const userReactions = reaction?.data.results.slice(0, 8) || [];

  const [showShareOptions, setShowShareOptions] = useState(false);
  const [showArrowOptions, setArrowShareOptions] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const shareOptionsRef = useRef();
  const arrowOptionsRef = useRef();
  const emojiPickerRef = useRef();

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

  const handleAddClick = () => {
    setShowEmojiPicker(!showEmojiPicker);
    setShowShareOptions(false);
    setArrowShareOptions(false);
  };

  const onEmojiClick = emojiObject => {
    setShowEmojiPicker(false);
    postReaction.mutate({ emoji: emojiObject.emoji, type: 'increase' });
  };

  return (
    <StyledContainer>
      <ToUser>To. {recipientName}</ToUser>
      <StyledSection>
        <StyledProfiles>
          {topProfileImages?.map((image, index) => (
            <StyledProfile key={index} src={image} alt={`Profile ${index}`} />
          ))}
          {recipientCount > 3 && (
            <StyledProfileNum>+{recipientCount - 3}</StyledProfileNum>
          )}
        </StyledProfiles>
        <StyledMessage>
          <StyledEmp>{recipientCount}</StyledEmp>명이 작성했어요!
        </StyledMessage>
        <StyledDivider />
        <TopEmoji
          topReactions={topReactions}
          setShowEmojiPicker={setShowEmojiPicker}
          setShowShareOptions={setShowShareOptions}
          postReaction={postReaction}
          showArrowOptions={showArrowOptions}
          setArrowShareOptions={setArrowShareOptions}
        />
        <StyledButtons>
          {showArrowOptions && (
            <ArrowOptions ref={arrowOptionsRef}>
              {userReactions.map((emoji, id) => (
                <EmojiBadge key={id} data={emoji} />
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
              <EmojiPicker onEmojiClick={onEmojiClick} />
            </StyledEmojiPicker>
          )}
          <StyledDivider2 />
          <Share
            setArrowShareOptions={setArrowShareOptions}
            setShowEmojiPicker={setShowEmojiPicker}
            showShareOptions={showShareOptions}
            setShowShareOptions={setShowShareOptions}
            shareOptionsRef={shareOptionsRef}
          />
        </StyledButtons>
      </StyledSection>
    </StyledContainer>
  );
};

export default SubHeader;

const AddButton = ({ src, alt, onClick, text }) => (
  <StyledButton onClick={onClick}>
    <img src={src} alt={alt} />
    <AddText>{text}</AddText>
  </StyledButton>
);

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

const AddText = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const ArrowOptions = styled.div`
  max-width: 31.2rem;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  border-radius: 0.8rem;
  border: 0.1rem;
  background-color: ${({ theme }) => theme.white};
  border: 0.1rem solid ${({ theme }) => theme.gray300};
  top: 120%;
  right: 105%;
  z-index: 200;
  padding: 2.4rem;
  @media ${({ theme }) => theme.breakpoint.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${({ theme }) => theme.breakpoint.mobile} {
    grid-template-columns: repeat(3, 1fr);
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
