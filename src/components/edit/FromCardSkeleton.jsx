import React from 'react';
import styled, { keyframes } from 'styled-components';

const FromCardSkeleton = () => {
  return <SkeletonCard />;
};

const skeletonAnimation = keyframes`
  0% {
    background-color: ${({ theme }) => theme.gray100};
  }
  50% {
    background-color: #e0e0e0;
  }
  100% {
    background-color: ${({ theme }) => theme.gray100};
  }
`;

const SkeletonCard = styled.div`
  width: 38.4rem;
  height: 28rem;
  background-color: ${({ theme }) => theme.gray200};
  border-radius: 1rem;
  animation: ${skeletonAnimation} 1.5s infinite;
`;

export default FromCardSkeleton;
