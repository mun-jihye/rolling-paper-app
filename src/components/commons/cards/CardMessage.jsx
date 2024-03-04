import React from 'react';
import styled from 'styled-components';

const CardMessage = ({ message, isModal }) => {
  return <Message isModal={isModal}>{message}</Message>;
};

const Message = styled.div`
  font-size: 1.8rem;
  line-height: 2.8rem;
  letter-spacing: -0.01rem;
  color: #5a5a5a;
  height: ${({ isModal }) => (isModal ? '24rem' : '10.6rem')};
  overflow: ${({ isModal }) => (isModal ? 'scroll' : 'hidden')};
  text-overflow: ${({ isModal }) => (isModal ? 'initial' : 'ellipsis')};

  ${props =>
    !props.isModal &&
    `
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  `}

  @media ${({ theme }) => theme.breakpoint.mobile} {
    font-size: 1.5rem;
    line-height: 2.2rem;
    max-height: 6.5rem;
    -webkit-line-clamp: 3;
  }
`;
export default CardMessage;
