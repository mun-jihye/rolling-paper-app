// import Error from 'components/commons/error/Error';
import Button from 'components/commons/buttons/Button';
import GNB from 'components/commons/header/GNB';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPage = () => {
  return (
    <Main>
      <GNB />
      <Box>
        {/* <Error /> */}
        <TextBox>
          <NumberText>404</NumberText>
          <Text>WHOOPS!!</Text>
        </TextBox>
        <Link to={'/'}>
          <Button secondary width={'30rem'} height={'5rem'} fontSize={'1.5rem'}>
            홈으로 가기
          </Button>
        </Link>
      </Box>
    </Main>
  );
};

const Main = styled.div`
  background-color: ${({ theme }) => theme.purple100};
  height: 100vh;
  padding: 0 2.4rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 60vh;
  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin-top: 10vh;
    height: 100%;
  }
  @media ${({ theme }) => theme.breakpoint.mobile} {
    margin-top: 20vh;
    height: 100%;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-left: 10rem;
  font-size: 15rem;
  color: ${({ theme }) => theme.purple700};
  @media ${({ theme }) => theme.breakpoint.tablet} {
    font-size: 10rem;
    justify-content: center;
    margin: 0;
  }
  @media ${({ theme }) => theme.breakpoint.mobile} {
    font-size: 5rem;
    justify-content: center;
    margin: 0;
  }
`;

const NumberText = styled(Text)`
  font-size: 20rem;
  font-weight: 600;
  @media ${({ theme }) => theme.breakpoint.mobile} {
    font-size: 10rem;
    justify-content: center;
    margin: 0;
  }
`;

export default ErrorPage;
