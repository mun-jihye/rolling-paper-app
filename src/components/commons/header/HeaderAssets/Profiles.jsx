import styled from 'styled-components';

export const Profiles = ({ profileImages = [], profileCount = 0 }) => {
  return (
    <div style={{ display: 'flex', marginRight: '1.5rem' }}>
      {profileImages.slice(0, 3).map((image, index) => (
        <StyledProfile key={index} src={image} alt={`Profile ${index}`} />
      ))}
      {profileCount > 3 && (
        <StyledProfileNum>+{profileCount - 3}</StyledProfileNum>
      )}
    </div>
  );
};

const StyledProfile = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 14rem;
  margin-right: -0.8rem;
  border: 0.14rem solid ${({ theme }) => theme.white};

  @media ${({ theme }) => theme.breakpoint.tablet} {
    display: none;
  }
`;

const StyledProfileNum = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  left: 4.8rem;
  border: 0.1rem;
  background: ${({ theme }) => theme.white};
  border: 0.1rem solid ${({ theme }) => theme.gray200};
  border-radius: 14rem;
  font-family: Pretendard;
  font-size: 1.2rem;
  line-height: 1.8rem;
  text-align: left;
  padding: 0.4rem 0.4rem;

  @media ${({ theme }) => theme.breakpoint.tablet} {
    display: none;
  }
`;
