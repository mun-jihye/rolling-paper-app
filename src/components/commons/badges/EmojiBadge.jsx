import React from 'react';
import styled from 'styled-components';

const data = {
  count: 24,
  emoji: '😍',
};
const EmojiBadge = () => {
  return (
    <StyledContainer>
      <Emoji>{data.emoji}</Emoji>
      <Count>{data.count}</Count>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.6rem;
  height: 3.6rem;
  padding: 0.8rem 1.2rem;
  border-radius: 3.2rem;
  gap: 0.5rem;
  background-color: #0000008a;
`;
const Emoji = styled.div`
  font-size: 1.6rem;
  line-height: 2.1rem;
`;
const Count = styled.div`
  color: ${({ theme }) => theme.white};
  font-size: 1.6rem;
  line-height: 2rem;
`;
export default EmojiBadge;
