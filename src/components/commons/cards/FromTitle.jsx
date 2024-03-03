import React from 'react';
import styled from 'styled-components';
import ProfileBadge from '../badges/ProfileBadge';

const data = {
  name: '김동훈',
  relationship: '가족',
};

const FromTitle = () => {
  return (
    <StyledTitle>
      <div>
        {`From. `}
        <span>{data.name}</span>
      </div>
      <ProfileBadge relationship={data.relationship} />
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
    font-weight: 700;
  }
  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 1.8rem;
    line-height: 2.8rem;
    span {
      font-size: 1.6rem;
      line-height: 2.6rem;
    }
  }
`;

export default FromTitle;
