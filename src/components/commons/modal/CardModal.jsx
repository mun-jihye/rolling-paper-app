import React from 'react';
import Profile from '../Profile';
import styled from 'styled-components';
import Date from '../cards/Date';
import FromTitle from '../cards/FromTitle';
import CardMessage from '../cards/CardMessage';
import { Modal } from './modal';

const CardModalContent = ({
  profileImageURL,
  sender,
  relationship,
  content,
  formattedDate,
}) => {
  return (
    <>
      <Header>
        <FlexContainer>
          <Profile src={profileImageURL} $iscard="true" />
          <FromTitle sender={sender} relationship={relationship} />
        </FlexContainer>
        <Date date={formattedDate} ismodal="true" />
      </Header>
      <Hr />
      <CardMessage message={content} ismodal="true" />
    </>
  );
};

const CardModal = ({
  profileImageURL,
  sender,
  relationship,
  content,
  formattedDate,
  showModal,
  handleClose,
  isDelete,
}) => {
  return (
    <Modal showModal={showModal} handleClose={handleClose} isDelete={isDelete}>
      <CardModalContent
        profileImageURL={profileImageURL}
        sender={sender}
        relationship={relationship}
        content={content}
        formattedDate={formattedDate}
      />
    </Modal>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const Hr = styled.hr`
  height: 1px;
  border: none;
  background-color: ${({ theme }) => theme.gray200};
  margin-bottom: 2rem;
`;
export default CardModal;
