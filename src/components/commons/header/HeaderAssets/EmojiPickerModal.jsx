import styled from 'styled-components';
import EmojiPicker from 'emoji-picker-react';

export const EmojiPickerModal = ({ onEmojiClick }) => {
  return (
    <StyledEmojiPicker>
      <EmojiPicker onEmojiClick={onEmojiClick} />
    </StyledEmojiPicker>
  );
};

export const StyledEmojiPicker = styled.div`
  position: absolute;
  width: 14rem;
  height: 10.1rem;
  top: 32%;
  right: 95%;
  z-index: 200;
  @media ${({ theme }) => theme.breakpoint.mobile} {
    right: 195%;
  }
`;
