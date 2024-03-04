import style from 'styled-components';
import { React } from 'react';
const MessagePage = () => {
  return (
    <Form className="message-container">
      <InputContainer>
        <Description>From</Description>
        <NameInput />
        <ProfileSelect>
          <Description>프로필 이미지</Description>
          <h3>프로필 이미지를 선택해주세요!</h3>
          <SelectedImage />
          <SampleImage />
        </ProfileSelect>
        <relationshipContainer>
          <Description>상대와의 관계</Description>
          <relationshipDropDown />
        </relationshipContainer>
        <TextEditorContainer>
          <Description>내용을 입력해주세요</Description>
          <TextEditor />
        </TextEditorContainer>
        <FontSelectContainer>
          <Description>폰트 선택</Description>
          <FontSelect />
          <SelectedFont />
          <SampleFont />
        </FontSelectContainer>
      </InputContainer>
      <ColorSelect />
    </Form>
  );
};

export default MessagePage;
