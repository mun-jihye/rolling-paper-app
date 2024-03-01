import React from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Logo from 'assets/images/headers/Logo.svg';
import routes from 'utils/constants/routes';

const MainHeader = ({ showButton }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(routes.home);
  };

  const handleCreateClick = () => {
    navigate(routes.post);
  };

  return (
    <>
      <StyledContainer>
        <StyledLogo src={Logo} alt="로고" onClick={handleLogoClick} />
        {showButton && (
          <StyledButton onClick={handleCreateClick}>
            롤링 페이퍼 만들기
          </StyledButton>
        )}
      </StyledContainer>
      <StyledDivider />
    </>
  );
};

export default MainHeader;

// 스타일 정의
const commonPadding = css`
  padding: 0 5rem;

  @media (max-width: 1248px) {
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 124.8rem;
  ${commonPadding}
`;

const StyledLogo = styled.img`
  width: 10.6rem;
  height: 4.2rem;
  padding-top: 1.2rem;
  cursor: pointer;
`;

const StyledButton = styled.button`
  width: 16rem;
  height: 4rem;
  border: 0.1rem solid black;
  border-radius: 1rem;
  font-family: Pretendard;
  font-size: 1.3rem;
  padding: 0.3rem 1.4rem;
  text-align: center;
  background-color: ${({ theme }) => theme.white};
  margin-top: 0.8rem;
  cursor: pointer;
`;

const StyledDivider = styled.div`
  height: 0.05rem;
  background-color: ${({ theme }) => theme.gray300};
  margin: 1rem 0;
`;
