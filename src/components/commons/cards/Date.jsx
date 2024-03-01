import React from 'react';
import styled from 'styled-components';

const Date = ({ date }) => {
  return <StyledDate>{date}</StyledDate>;
};

const StyledDate = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.5%;
  color: ${({ theme }) => theme.gray400};
`;

export default Date;
