import useCloseModal from 'components/hooks/useCloseModal';
import React, { useRef } from 'react';
import Portal from './Portal';
import styled from 'styled-components';

const Modal = ({ children, showModal, handleClose }) => {
  const modalRef = useRef();
  useCloseModal(showModal, handleClose, modalRef);
  return (
    <Portal>
      <ModalBackground>
        <ModalInner ref={modalRef}>
          {children}
          <button onClick={handleClose}>확인</button>
        </ModalInner>
      </ModalBackground>
    </Portal>
  );
};

const ModalBackground = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  overflow: auto;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
`;
const ModalInner = styled.div`
  width: 60rem;
  height: 47.6rem;
  background-color: ${({ theme }) => theme.white};
  border-radius: 1.6rem;
  padding: 3.5rem;
  box-shadow: 0px 2px 12px 0px #00000014;
`;
export default Modal;
