import React from 'react';
import styled from 'styled-components';
import ProfileBadge from '../badges/ProfileBadge';

/**
 *
 * @param {object} props
 * @param {string} props.sender 메세지 보낸 사람 이름
 * @param {string} props.relationship 메세지 보낸 사람과의 관계
 * @returns
 */
const FromTitle = ({ sender, relationship }) => {
  return (
    <StyledTitle>
      <div>
        {`From. `}
        <span>{sender}</span>
      </div>
      <ProfileBadge relationship={relationship} />
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 2rem;
  line-height: 2.4rem;
  gap: 0.6rem;
  span {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
  @media ${({ theme }) => theme.breakpoint.mobile} {
    font-size: 1.8rem;
    line-height: 2.8rem;
    span {
      font-size: 1.6rem;
      line-height: 2.6rem;
    }
  }
`;

export default FromTitle;
