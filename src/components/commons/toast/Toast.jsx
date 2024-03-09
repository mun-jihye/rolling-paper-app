import React, { useEffect } from 'react';
import styled from 'styled-components';
import { fadeIn } from './Animation';
import icon from 'assets/images/toast/completed.png';

/**
 *
 * @param {object} props
 * @param {Function} props.setIsAlert 토스트 창 보임 여부를 결정할 함수
 * @param {boolean} props.toast 토스트 창 보임 여부
 * @param {string} props.positionLeft 토스트 창 위치 - 왼쪽으로 얼마나 움직일지 결정
 * @returns
 */
const Toast = ({ setIsAlert, toast, positionLeft }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAlert(false);
    }, 3000);
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
  background-color: #000000cc;
  color: white;
  width: 52.4rem;
  height: 6.4rem;
  font-size: 1.6rem;
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  box-shadow: 0 0 6px 0 rgba(46, 46, 46, 0.5);
  margin: 0 auto;
  position: fixed;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${fadeIn} 3s ease-in-out 0s infinite normal none running;
  z-index: 100;
  @media (min-width: 375px) and (max-width: 767px) {
    width: 32rem;
  }
`;
export default Toast;
