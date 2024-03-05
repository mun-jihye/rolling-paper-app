import { React, useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import GNB from 'components/commons/header/GNB';
import { TextFieldInput, Options } from 'components/commons/form';
import ToggleBtn from 'components/commons/buttons/ToggleBtn';
import Primary from 'components/commons/buttons/PrimaryBtn';
import nation1 from 'assets/backgrounds/nation1.svg';
import nation2 from 'assets/backgrounds/nation2.svg';

const PostPage = () => {
  const [toggleState, setToggleState] = useState('컬러');
  const items = useMemo(() => {
    return toggleState === '컬러'
      ? ['orange200', 'purple200', 'blue200', 'green200']
      : [nation1, nation2, nation1, nation2];
  }, [toggleState]);

  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [formValues, setFormValues] = useState({
    textFieldInput: '',
    selectedItem,
  });
  const inputDisabled = false;

  const error = { message: '' };

  const handleChange = e => {
    if (!e.target.value) {
      setIsBtnDisabled(true);
    } else {
      setIsBtnDisabled(false);
    }
    setFormValues({
      ...formValues,
      textFieldInput: e.target.value,
    });
  };

  const handleToggle = e => {
    setToggleState(e.target.innerText.toLowerCase());
    setSelectedItem(items[0]);
    setFormValues(prevState => ({
      ...prevState,
      selectedItem: items[0],
    }));
  };
  const handleSelect = selectedItem => {
    setFormValues(prevState => ({
      ...prevState,
      selectedItem: items[0],
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formValues);
    // this.props.history.push({
    //   pathname: '/post/{id}',
    //   state: { formValues },
    // });
  };

  useEffect(() => {
    setFormValues(prevState => ({
      ...prevState,
      selectedItem,
    }));
  }, [selectedItem]);

  return (
    <>
      <GNB />
      <AddPostForm className="post-container">
        <InputContainer>
          <h2>To</h2>
          <NameInput
            placeholder={'받는 사람 이름을 입력해주세요'}
            disabled={inputDisabled}
            error={error}
            handleChange={handleChange}
          />
        </InputContainer>
        <SelectContainer>
          <Description>
            <h2>배경화면을 선택해 주세요.</h2>
            <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
          </Description>
          <ToggleBtn onClick={handleToggle} />
          <StyledOptions
            toggleState={toggleState}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            handleSelect={handleSelect}
            items={items}
          />
        </SelectContainer>
        <StyledBtn
          type="submit"
          onClick={handleSubmit}
          disabled={isBtnDisabled}
        >
          생성하기
        </StyledBtn>
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

  z-index: 1;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 4.2rem;
    letter-spacing: -0.01em;
    text-align: left;
  }
`;

const NameInput = styled(TextFieldInput)`
  width: 72rem;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: relative;
  padding-top: 5rem;
  gap: 0.4rem;
`;
const Description = styled.div`
  margin-bottom: 2.4rem;
  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 4.2rem;
    letter-spacing: -0.01em;
    margin-bottom: 0.4rem;
  }
  p {
    font-size: 1.6rem;
    line-height: 2.6rem;
    letter-spacing: -0.01em;
    text-align: left;

    color: ${({ theme }) => theme.gray500};
  }
`;

const StyledOptions = styled(Options)`
  padding: 4.5rem 0;
`;
const StyledBtn = styled(Primary)`
  width: 72rem;

  font-size: 1.8rem;
  line-height: 2.8rem;
  letter-spacing: -0.01em;
`;

export default PostPage;
