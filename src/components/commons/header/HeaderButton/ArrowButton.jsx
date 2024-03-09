import React from 'react';
import styled from 'styled-components';
import EmojiBadge from 'components/commons/badges/EmojiBadge';

const ArrowOptions = ({ userReactions, ref }) => {
  return (
    <StyledArrowOptions ref={ref}>
      {userReactions.map((emoji, id) => (
        <EmojiBadge key={id} data={emoji} />
      ))}
    </StyledArrowOptions>
  );
};

const StyledArrowOptions = styled.div`
  max-width: 31.2rem;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  border-radius: 0.8rem;
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

export default ArrowOptions;
