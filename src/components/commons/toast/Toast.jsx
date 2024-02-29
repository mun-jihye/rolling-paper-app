import React, { useEffect } from 'react';
import styled from 'styled-components';
import { fadeIn } from './Animation';
import icon from 'assets/images/toast/completed.png';

const Toast = ({ setIsAlert, toast, positionLeft }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAlert(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [toast]);
  return (
    <Container left={positionLeft}>
      <img src={icon} alt="url 복사 완료" />
      url이 복사되었습니다.
    </Container>
  );
};

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.696);
  color: white;
  width: 20rem;
  height: 2.5rem;
  font-size: 13px;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 6px 0 rgba(46, 46, 46, 0.5);
  left: ${prop => prop.left};
  position: fixed;
  top: 10%;
  animation: ${fadeIn} 5s ease-in-out 0s infinite normal none running;
  z-index: 1000;
`;
export default Toast;
