import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import useCloseModal from 'hooks/useCloseModal';
import EmojiBadge from 'components/commons/badges/EmojiBadge';
import TopEmoji from './HeaderAssets/TopEmoji';
import Share from './HeaderButton/ShareButton';
import { useGetReactionQuery } from 'hooks/queries/reaction/useGetReactionQuery';
import { usePostReactionQuery } from 'hooks/queries/reaction/usePostReactionQuery';
import { useParams } from 'react-router-dom';
import { StyledButtons } from './HeaderStyled/ButtonContainer';
import { StyledDivider } from './HeaderStyled/Dividers';
import { StyledEmojiPicker } from './HeaderAssets/EmojiPickerModal';
import { EmojiPickerModal } from './HeaderAssets/EmojiPickerModal';
import { Profiles } from './HeaderAssets/Profiles';
import { AddButton } from './HeaderButton/AddButton';

const SubHeader = ({ data }) => {
  const { postId } = useParams();
  const { data: reaction } = useGetReactionQuery(postId);
  const postReaction = usePostReactionQuery(postId);

  const recipientName = data ? data.name : 'Unknown';
  const recipientCount = data ? data.messageCount : '0';
  const topProfileImages = data?.recentMessages
    .slice(0, 3)
    .map(msg => msg.profileImageURL || []);
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
          <Profiles
            profileImages={topProfileImages}
            profileCount={recipientCount}
          />
        </StyledProfiles>
        <StyledMessage>
          <StyledEmp>{recipientCount}</StyledEmp>명이 작성했어요!
        </StyledMessage>
        <StyledDivider type={true} />
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
          <AddButton onClick={handleAddClick} text="추가" />
          {showEmojiPicker && (
            <StyledEmojiPicker ref={emojiPickerRef}>
              <EmojiPickerModal onEmojiClick={onEmojiClick} />
            </StyledEmojiPicker>
          )}
          <StyledDivider type={false} />
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
    left: -25rem;
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
