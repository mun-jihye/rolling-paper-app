import { React } from 'react';
import styled from 'styled-components';
import {
  TextFieldInput,
  TextFieldDropDown,
  TextFieldTextEditor,
} from 'components/commons/form';
import GNB from 'components/commons/header/GNB';
import Primary from 'components/commons/buttons/PrimaryBtn';
import person from 'assets/images/profiles/person.svg';
import profile1 from 'assets/images/profiles/profile1.svg';
import profile2 from 'assets/images/profiles/profile2.svg';

const MessagePage = () => {
  const inputDisabled = false;
  const images = [
    profile1,
    profile2,
    profile1,
    profile2,
    profile1,
    profile2,
    profile1,
    profile2,
    profile1,
    profile2,
  ];

  const error = { message: '' };
  const handleChange = e => {};
  return (
    <>
      <GNB />
      <AddMessageForm className="message-container">
        <InputContainer>
          <Description>From</Description>
          <StyledTextFieldInput
            placeholder={'받는 사람 이름을 입력해주세요'}
            disabled={inputDisabled}
            error={error}
            handleChange={handleChange}
          />
          <ProfileSelect className="profile-container">
            <Description>프로필 이미지</Description>
            <div className="container">
              <SelectedImg>
                <img src={person} alt="기본 이미지" />
              </SelectedImg>
              <div>
                <h3>프로필 이미지를 선택해주세요!</h3>
                <SampleImages>
                  {images.map((image, index) => (
                    <img key={index} src={image} alt="샘플 이미지" />
                  ))}
                </SampleImages>
              </div>
            </div>
          </ProfileSelect>
          <RelationshipContainer>
            <Description>상대와의 관계</Description>
            <StyledTextFieldDropDown1 />
          </RelationshipContainer>
          <TextEditorContainer>
            <Description>내용을 입력해주세요</Description>
            <StyledTextFieldTextEditor />
          </TextEditorContainer>
          <FontSelectContainer>
            <Description>폰트 선택</Description>
            <StyledTextFieldDropDown2 />
          </FontSelectContainer>
          <StyledPrimary>생성하기</StyledPrimary>
        </InputContainer>
      </AddMessageForm>
    </>
  );
};
const AddMessageForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: relative;
  inset: 0;
  padding: 4.7rem 0;
  gap: 5rem;

  z-index: 1;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  position: relative;
`;

const Description = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.6rem;
  letter-spacing: -0.01em;
  text-align: left;
`;

const StyledTextFieldInput = styled(TextFieldInput)`
  width: 72rem;
  margin-top: 1.2rem;
  margin-bottom: 5rem;
`;

const ProfileSelect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.2rem;
  margin-bottom: 5rem;

  position: relative;
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 3.2rem;
  }
  h3 {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.6rem;
    letter-spacing: -0.01em;
    text-align: left;
    color: ${({ theme }) => theme.gray500};
  }
`;
const SelectedImg = styled.div`
  width: 8rem;
  height: 8rem;
  padding: 2.4rem;
  border-radius: 10rem;
  gap: 1rem;
  background-color: ${({ theme }) => theme.gray300};
`;
const SampleImages = styled.div`
  img {
    margin-right: 1.2rem;
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 10rem;
    border: 0.1rem;
  }
`;
const RelationshipContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.2rem;
  margin-bottom: 5rem;

  position: relative;
`;
const StyledTextFieldDropDown1 = styled(TextFieldDropDown)``;
const TextEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.2rem;
  margin-bottom: 5rem;
`;
const StyledTextFieldTextEditor = styled(TextFieldTextEditor)``;
const FontSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.2rem;
  margin-bottom: 3.8rem;
`;
const StyledTextFieldDropDown2 = styled(TextFieldDropDown)``;
const StyledPrimary = styled(Primary)`
  width: 72rem;
`;

export default MessagePage;
