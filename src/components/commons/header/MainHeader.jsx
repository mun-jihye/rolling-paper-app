import styled from 'styled-components';
import Logo from './Logo.svg';

const MainHeader = () => {
  // 롤링 페이퍼 만들기 버튼 이벤트
  const handleClick = e => {
    e.preventDefault();
  };

  return (
    <>
      <StyledContainer>
        <StyledLogo src={Logo} alt="로고" />
        <StyledButton onClick={handleClick}>롤링 페이퍼 만들기</StyledButton>
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
  padding: 0 24px;

  @media (min-width: 1248px) {
    padding: 0;
    margin-left: 36rem;
    margin-right: 36rem;
  }
`;

const StyledDivider = styled.div`
  height: 0.05rem;
  background-color: ${({ theme }) => theme.gray300};
  margin: 1rem 0;
`;
