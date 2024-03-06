import React from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Logo from 'assets/images/headers/Logo.svg';
import routes from 'utils/constants/routes';
import { useLocation } from 'react-router-dom';
import useDeviceType from 'hooks/useDeviceType';

import { useQuery } from 'react-query';
import { getRecipient } from 'api/recipient';

const MainHeader = ({ showButton }) => {
  const location = useLocation();
  const deviceType = useDeviceType();
  const isMobile = deviceType === 'Mobile';
  const isPostIdPage = location.pathname.match(/^\/post\/\d+$/);

  //데이터 넘겨받으면 삭제
  const recipientId = 4114;

  const {
    data: response,
    isLoading,
    error,
  } = useQuery(['recipient', recipientId], () => getRecipient(recipientId));
  const recipientName = response ? response.data.name : 'Unknown';

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(routes.home);
  };

  const handleCreateClick = () => {
    navigate(routes.post);
  };

  //데이터 넘겨받으면 삭제
  if (isLoading) return <div>데이터를 불러오는 중...</div>;
  if (error)
    return <div>데이터를 불러오는데 실패했습니다: {console.log(error)}</div>;

  if (isMobile && isPostIdPage) {
    return (
      <>
        <StyledToUserContainer>To. {recipientName}</StyledToUserContainer>
        <StyledDivider />
      </>
    );
  }

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

const commonPadding = css`
  @media (min-width: 768px) {
    padding: 0 2.4rem;
  }

  @media (max-width: 767px) {
    padding: 0 2.4rem;
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
  padding-top: 1rem;
  cursor: pointer;
`;

const StyledButton = styled.button`
  width: 16rem;
  height: 4rem;
  border: 0.1rem solid ${({ theme }) => theme.gray400};
  border-radius: 1rem;
  font-family: Pretendard;
  font-size: 1.3rem;
  padding: 0.3rem 1.4rem;
  text-align: center;
  background-color: ${({ theme }) => theme.white};
  margin-top: 1rem;
  cursor: pointer;
`;

const StyledDivider = styled.div`
  height: 0.05rem;
  background-color: ${({ theme }) => theme.gray300};
  margin: 1rem 0;
`;

const StyledToUserContainer = styled.div`
  padding-top: 1rem;
  padding-left: 2.4rem;
  font-family: Pretendard;
  font-size: 2.7rem;
  font-weight: 700;
  line-height: 4.2rem;
  letter-spacing: -0.01em;
  text-align: left;
`;
