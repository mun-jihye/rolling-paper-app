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
        <strong>{data.name}</strong>
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
`;

export default FromTitle;
