import { React } from 'react';
const AddPostPage = () => {
  return (
    <StyledAddPostForm>
      <StyledInputContainer>
        <h2>To</h2>
        <StyledNameInput />
      </StyledInputContainer>
      <StyledSelectContainer>
        <StyledDescription>
          <h2>배경화면을 선택해주세요</h2>
          <p>컬러를 성택하거나, 이미지를 선택할 수 있습니다.</p>
        </StyledDescription>
        <StyledSelectButton />
        <StyledPreviewBlocks />
      </StyledSelectContainer>
      <StyledCreateButton />
    </StyledAddPostForm>
  );
};

export default AddPostPage;
