import { CardContainer } from './CardContainer';
import Profile from 'components/commons/Profile';
import FromTitle from 'components/commons/cards/FromTitle';
import CardMessage from 'components/commons/cards/CardMessage';
import Date from 'components/commons/cards/Date';
import styled from 'styled-components';
import { useState } from 'react';
import { Modal } from 'components/commons/modal/modal';
import CardModal from 'components/commons/modal/CardModal';
import IconButton from 'components/commons/buttons/IconButton';

const FromCard = ({
  profileImageURL,
  sender,
  relationship,
  content,
  formattedDate,
  isDelete,
}) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleDelete = () => {
    alert('선택한 메세지가 삭제됩니다.');
  };
  const handleClose = () => {
    setShowModal(false);
    isDelete && handleDelete();
  };
  return (
    <>
      <CardContainer onClick={handleClick}>
        <Header>
          <FlexContainer>
            <Profile src={profileImageURL} $iscard="true" />
            <FromTitle sender={sender} relationship={relationship} />
          </FlexContainer>
          {isDelete && (
            <IconButton icon={'delete'} Delete onClick={handleDelete} />
          )}
        </Header>
        <Hr />
        <Content>
          <CardMessage message={content} $ismodal={false} />
          <Date date={formattedDate} $ismodal={false} />
        </Content>
      </CardContainer>
      {showModal && (
        <Modal
          showModal={showModal}
          handleClose={handleClose}
          isDelete={isDelete}
        >
          <CardModal
            profileImageURL={profileImageURL}
            sender={sender}
            relationship={relationship}
            content={content}
            formattedDate={formattedDate}
          />
        </Modal>
      )}
    </>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
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
  margin-bottom: 1.5rem;
  background-color: ${({ theme }) => theme.gray200};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 13.6rem;

  @media ${({ theme }) => theme.breakpoint.mobile} {
    height: 9.6rem;
  }
`;
export default FromCard;
