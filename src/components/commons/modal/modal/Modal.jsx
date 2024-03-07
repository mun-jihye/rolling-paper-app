import useCloseModal from 'hooks/useCloseModal';
import React, { useRef } from 'react';
import Portal from './Portal';
import styled from 'styled-components';
import Button from 'components/commons/buttons/Button';

const Modal = ({ children, showModal, handleClose, isDelete }) => {
  const modalRef = useRef();
  useCloseModal(showModal, handleClose, modalRef);
  return (
    showModal && (
      <Portal>
        <ModalBackground>
          <ModalInner ref={modalRef}>
            {children}
            <FlexContainer>
              <Button onClick={handleClose}>
                {isDelete ? '삭제하기' : '확인'}
              </Button>
            </FlexContainer>
          </ModalInner>
        </ModalBackground>
      </Portal>
    )
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
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Modal;
