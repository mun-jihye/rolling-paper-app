import styled from 'styled-components';
import Logo from './Logo.svg';

const StyledLogo = styled.img`
  width: 10.6rem;
  height: 4.2rem;
  margin-left: 36rem;
  padding-top: 1.1rem;
`;

const StyledButton = styled.button`
  width: 16rem;
  height: 4.2rem;
  border: 0.1rem;
  border-radius: 0.8rem;
  font-family: Pretendard;
  font-size: 1.4rem;
  padding: 0.8rem 1.6rem 0.8rem 1.6rem;
  border: 0.1rem solid black;
  text-align: center;
  margin-right: 36rem;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.white};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Divider = styled.div`
  height: 0.05rem;
  background-color: ${({ theme }) => theme.gray300}; // 테마의 gray300 색상 사용
  margin: 1rem 0;
`;

const MainHeader = () => {
  const handleClick = (e) => {
    e.preventDefault()
  }
  return (
    <>
        <Container>
          <StyledLogo src={Logo} alt="로고" />
          <StyledButton onClick={handleClick}>롤링 페이퍼 만들기</StyledButton>
        </Container>
        <Divider />
    </>
  );
};

export default MainHeader;
