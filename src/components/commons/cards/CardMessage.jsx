import React from 'react';
import styled from 'styled-components';

const CardMessage = ({ message }) => {
  return <Message>{message}</Message>;
};

const Message = styled.div`
  font-size: 1.8rem;
  line-height: 2.8rem;
  letter-spacing: -0.01rem;
  color: #5a5a5a;
  max-height: 11rem;
  overflow: scroll;

  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 1.5rem;
    line-height: 2.2rem;
    max-height: 5.6rem;
  }
`;
export default CardMessage;
