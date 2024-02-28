import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from 'components/assets/images/headers/Logo.svg';

const MainHeader = () => {
  let navigate = useNavigate();
  let location = useLocation();

  // 로고 클릭 path: /
  const handleLogoClick = () => {
    navigate('/');
  };

  // 롤링 버터튼 path: /post
  const handleCreateClick = () => {
    navigate('/post');
  };

  // path 확인하고 추가하기
  const shouldShowCreateButton =
    location.pathname === '/' ||
    location.pathname === '/main' ||
    location.pathname === '/header';

  return (
    <>
      <StyledContainer>
        <StyledLogo src={Logo} alt="로고" onClick={handleLogoClick} />
        {shouldShowCreateButton && (
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

const StyledLogo = styled.img`
  width: 10.6rem;
  height: 4.2rem;
  padding-top: 1.2rem;
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
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto; // 컨테이너를 중앙 정렬
  padding: 0 2rem; // 좌우 패딩을 rem 단위로 설정
  max-width: 1248px; // 최대 너비 설정

  @media (max-width: 1248px) {
    // 화면 너비가 1248px보다 작을 때 스타일 적용
    justify-content: space-around; // 로고와 버튼 사이 간격 조정
    padding: 0 1rem; // 좌우 패딩 감소
  }

  @media (max-width: 768px) {
    // 모바일 화면에서 스타일 적용
    padding: 0 0.5rem; // 좌우 패딩 더 감소
  }
`;

const StyledDivider = styled.div`
  height: 0.05rem;
  background-color: ${({ theme }) => theme.gray300};
  margin: 1rem 0;
`;
