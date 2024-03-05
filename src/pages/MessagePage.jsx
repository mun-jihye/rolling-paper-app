import { React, useState, useEffect } from 'react';
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
  const initialSelectedItem = ['지인', 'Noto Sans'];

  const [inputValue, setInputValue] = useState('');
  const [editorValue, setEditorValue] = useState('');
  const [isBtnDisabled, setIsBtnDisabled] = useState(
    !(inputValue && editorValue),
  );
  const [selectedImage, setSelectedImage] = useState(null);

  const inputDisabled = false;
  const dropDownDisabled = false;
  const error = { message: '' };

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

  const listItems = ['친구', '지인', '동료', '가족'];
  const listFontFamily = ['Noto Sans', 'Pretendard'];

  const handleImageChange = image => {
    setSelectedImage(image);
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleEditorChange = e => {
    setEditorValue(e.target.value);
  };

  useEffect(() => {
    setIsBtnDisabled(!(inputValue.trim() && editorValue.trim()));
  }, [inputValue, editorValue]);

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
        <RelationshipContainer>
          <Description>상대와의 관계</Description>
          <RelationshipDropDown />
        </RelationshipContainer>
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
