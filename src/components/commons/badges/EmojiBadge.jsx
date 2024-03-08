import React from 'react';
import styled from 'styled-components';

/**
 * 이모지 벳지 컴포넌트
 * @param {object} props
 * @param {string} props.className
 * @param {object} props.data 이모지 개수, 이모지
 * @returns
 */
const EmojiBadge = ({ className, data }) => {
  return (
    <StyledContainer className={className}>
      <Emoji>{data?.emoji}</Emoji>
      <Count>{data?.count}</Count>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.8rem;
  height: 3.8rem;
  padding: 0.6rem 1.2rem;
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
