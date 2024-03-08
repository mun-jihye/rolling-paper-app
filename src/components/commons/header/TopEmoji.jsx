import styled from 'styled-components';
import EmojiBadge from '../badges/EmojiBadge';
import ArrowDown from 'assets/images/headers/ArrowDown.svg';

const TopEmoji = ({
  topReactions,
  setShowEmojiPicker,
  setShowShareOptions,
  postReaction,
  setArrowShareOptions,
  showArrowOptions,
}) => {
  const handleBadgeClick = data => {
    postReaction.mutate({ emoji: data.emoji, type: 'decrease' });
  };
  const handleArrowClick = () => {
    setArrowShareOptions(!showArrowOptions);
    setShowEmojiPicker(false);
    setShowShareOptions(false);
  };

  return (
    <>
      <StyledEmojis>
        {topReactions.map((reaction, index) => (
          <EmojiBadge
            key={index}
            data={reaction}
            onClick={() => handleBadgeClick(reaction)}
          />
        ))}
        <StyledArrow onClick={handleArrowClick} src={ArrowDown} alt="Arrow" />
      </StyledEmojis>
    </>
  );
};

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

export default TopEmoji;
