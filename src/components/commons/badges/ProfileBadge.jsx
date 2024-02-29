import React from 'react';
import styled from 'styled-components';

const data = {
  relationship: '가족',
};

const ProfileBadge = () => {
  return (
    <StyledContainer relationship={data.relationship}>
      <BadgeContent relationship={data.relationship}>
        {data.relationship}
      </BadgeContent>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 4.1rem;
  height: 2rem;
  padding: 0 0.8rem;
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, relationship }) => {
    if (relationship === '가족') {
      return theme.green100;
    } else if (relationship === '친구') {
      return theme.blue100;
    } else if (relationship === '지인') {
      return theme.orange100;
    } else if (relationship === '동료') {
      return theme.purple100;
    }
  }};
`;
const BadgeContent = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  letter-spacing: -0.005rem;
  color: ${({ theme, relationship }) => {
    if (relationship === '가족') {
      return theme.green500;
    } else if (relationship === '친구') {
      return theme.blue500;
    } else if (relationship === '지인') {
      return theme.orange500;
    } else if (relationship === '동료') {
      return theme.purple500;
    }
  }};
`;
export default ProfileBadge;
