import { React } from 'react';
const AddMessagePage = () => {
  return (
    <div>
      <StyledAddMessageForm>
        <StyledInputContainer>
          <Description>From</Description>
          <StyledNameInput />
          <StyledProfileSelect>
            <Description>프로필 이미지</Description>
            <h3>프로필 이미지를 선택해주세요!</h3>
            <SelectedImage />
            <SampleImage />
          </StyledProfileSelect>
          <StyledRelationshipContainer>
            <Description>상대와의 관계</Description>
            <StyledRelationshipDropDown />
          </StyledRelationshipContainer>
          <StyledTextEditorContainer>
            <Description>내용을 입력해주세요</Description>
            <StyledTextContainer />
          </StyledTextEditorContainer>
          <FontSelectContainer>
            <Description>폰트 선택</Description>
            <StyledFontSelect />
            <SelectedFont />
            <SampleFont />
          </FontSelectContainer>
        </StyledInputContainer>
        <ColorSelect />
      </StyledAddMessageForm>
    </div>
  );
};

export default AddMessagePage;
