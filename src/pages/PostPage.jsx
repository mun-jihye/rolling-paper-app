import { React } from 'react';
import styled from 'styled-components';
import GNB from 'components/commons/header/GNB';
import { TextFieldInput } from 'components/commons/form';

const PostPage = () => {
  const disabled = false;
  const error = {};

  return (
    <>
      <GNB />
      <AddPostForm className="post-container">
        <InputContainer>
          <h2>To</h2>
          <TextFieldInput
            placeholder={'받는 사람 이름을 입력해주세요'}
            disabled={disabled}
            error={error}
          />
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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: relative;
  inset: 0;
  padding: 5.7rem 0 35rem;

  background-color: gray;
  z-index: 1;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  position: relative;
  padding-top: 5rem;
`;
const Description = styled.div`
  & > h2 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 4.2rem;
    letter-spacing: -0.01em;
  }
`;
const SelectButton = styled.div``;
const PreviewBlocks = styled.div`
  position: relative;
  display: flex;
`;
const CreateButton = styled.button``;

export default PostPage;
