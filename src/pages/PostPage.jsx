import { React } from 'react';
import styled from 'styled-components';
import GNB from 'components/commons/header/GNB';

const PostPage = () => {
  return (
    <>
      <GNB />
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
    </>
  );
};

const AddPostForm = styled.div`
  display: flex;
  position: relative;
  top: 122px;
  padding: 100px 0;
  flex-direction: column;
  background-color: yellow;
`;

const InputContainer = styled.div`
  display: flex;
  background-color: green;
  height: 100px;

  & > h2 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 4.2rem;
    letter-spacing: -0.01em;
    text-align: left;
  }
`;
const NameInput = styled.input`
  position: relative;
`;
const SelectContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
const Description = styled.div`
  & > h2 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 4.2rem;
    letter-spacing: -0.01em;
    text-align: left;
  }
`;
const SelectButton = styled.div``;
const PreviewBlocks = styled.div`
  position: relative;
  display: flex;
`;
const CreateButton = styled.button``;

export default PostPage;
