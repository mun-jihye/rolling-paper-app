import React from 'react';
import Profile from '../Profile';
import styled from 'styled-components';
import Date from '../cards/Date';
import FromTitle from '../cards/FromTitle';
import CardMessage from '../cards/CardMessage';
import { Modal } from './modal';

/**
 * 모달 내부 콘텐츠 컴포넌트
 * @param {object} props
 * @param {string} props.profileImageURL 프로필 이미지 경로
 * @param {string} props.sender 보낸 사람 이름
 * @param {string} props.relationship
 * @param {string} props.content 메세지 내용
 * @param {string} props.formattedDate 포멧팅 된 날짜
 * @param {string} props.font 서버에서 불러온 폰트
 * @returns
 */
const CardModalContent = ({
  profileImageURL,
  sender,
  relationship,
  content,
  formattedDate,
  font,
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
      <CardMessage message={content} ismodal="true" font={font} />
    </>
  );
};

/**
 *
 * @param {object} props
 * @param {boolean} props.showModal 모달 보임 여부
 * @param {Function} props.handleClose 모달 닫힐 시 실행할 함수
 * @param {boolean} props.isDelete 편집모드 여부에 따라 모달 내 버튼이 달라짐
 * @returns
 */
const CardModal = ({
  profileImageURL,
  sender,
  relationship,
  content,
  formattedDate,
  showModal,
  handleClose,
  isDelete,
  font,
}) => {
  return (
    <Modal showModal={showModal} handleClose={handleClose} isDelete={isDelete}>
      <CardModalContent
        font={font}
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
