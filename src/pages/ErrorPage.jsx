import Button from 'components/commons/buttons/Button';
// import MainHeader from 'components/commons/header/MainHeader';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import routes from 'utils/constants/routes';

const ErrorPage = () => {
  return (
    <>
      {/* <MainHeader /> */}
      <Main>
        <TextBox>
          <NumberText>404</NumberText>
          <Text>WHOOPS!!</Text>
          <SubText>is not found</SubText>
          <SubText>something went wrong go back to Home.</SubText>
        </TextBox>
        <Link to={routes.home}>
          <ButtonStyle
            secondary
            width={'30rem'}
            height={'5rem'}
            fontSize={'1.5rem'}
          >
            홈으로 가기
          </ButtonStyle>
        </Link>
      </Main>
    </>
  );
};

const Main = styled.div`
  background-color: ${({ theme }) => theme.purple100};
  height: 100%;
  width: 100%;
  padding: 0 2.4rem;
  position: fixed;
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.breakpoint.tablet} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.breakpoint.mobile} {
    flex-direction: column;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

const SubText = styled(Text)`
  font-size: 3rem;
  @media ${({ theme }) => theme.breakpoint.mobile} {
    font-size: 1.5rem;
  }
`;

const ButtonStyle = styled(Button)`
  position: relative;
  top: 21rem;
  right: 5rem;
  @media ${({ theme }) => theme.breakpoint.tablet} {
    margin-bottom: 2.4rem;
    top: 0;
    right: 0;
  }
  @media ${({ theme }) => theme.breakpoint.mobile} {
    margin-bottom: 2.4rem;
    top: 0;
    right: 0;
  }
`;

export default ErrorPage;
