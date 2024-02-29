import style from 'styled-components';
import { React } from 'react';
const PostPage = () => {
  return (
    <AddPostForm className="post-container">
      <InputContainer>
        <h2>To</h2>
        <NameInput />
      </InputContainer>
      <SelectContainer>
        <Description>
          <h2>배경화면을 선택해주세요</h2>
          <p>컬러를 성택하거나, 이미지를 선택할 수 있습니다.</p>
        </Description>
        <SelectButton />
        <PreviewBlocks />
      </SelectContainer>
      <CreateButton />
    </AddPostForm>
  );
};

const AddPostForm = style.form`
  display: flex;
  flex-direction: column;`;
const InputContainer = style.div`
  position: relative;
  top: 5.2rem;

  & > h2 {
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 4.2rem;
  letter-spacing: -0.01em;
  text-align: left;
  }
`;
const NameInput = style.input`
  position: relative;
`;
const SelectContainer = style.div`
  position: relative;
  display: flex;
  flex-direction: column;


`;
const Description = style.div`

  & > h2 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 4.2rem;
    letter-spacing: -0.01em;
    text-align: left;
    }

`;
const SelectButton = style.div``;
const PreviewBlocks = style.div`
  position: relative;
  display: flex;

`;
const CreateButton = style.button``;

export default PostPage;
