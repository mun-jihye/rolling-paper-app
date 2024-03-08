import { React, useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import GNB from 'components/commons/header/GNB';
import { TextFieldInput, Options } from 'components/commons/form';
import ToggleBtn from 'components/commons/buttons/ToggleBtn';
import Button from 'components/commons/buttons/Button';
import { createRecipients } from 'api/recipient';
import { AUTH } from 'utils/constants/API';
import { instance } from 'api/';
import { useNavigate } from 'react-router-dom';
import { errorAlert } from 'utils/errorAlert';

const PostPage = () => {
  /**
   * @description 사용할 state를 선언하고 초기값을 선언하고 있다.
   */
  const [toggleState, setToggleState] = useState('컬러');
  const [imageURLs, setImageURLs] = useState([]);

  /**
   * @description 아래의 코드에서 사용하기 위한 상수와 함수를 선언하고 있다.
   */
  const colors = ['beige', 'purple', 'blue', 'green'];
  const inputDisabled = false;
  const error = { message: '' };
  const navigate = useNavigate();

  /**
   * @description 페이지가 호출될 때 딱 한번 backgroundImages를 불러온다.
   * @requires {@link instance} {@link AUTH}
   */
  useEffect(() => {
    const getBackgroundImages = async () => {
      const response = await instance.get(AUTH.backgroundImages);
      setImageURLs(response.data.imageUrls);
    };
    getBackgroundImages();
  }, []);

  /**
   * @description toggleState의 값에 따라 서로 다른 값을 반환한다. toggleState가 변화했을 때만 다시 실행된다.
   */
  const items = useMemo(() => {
    return toggleState === '컬러'
      ? colors.map(color => `${color}200`)
      : imageURLs;
  }, [toggleState]);

  /**
   * @description items 변수가 선언된 이후에 선언되어야 할 state를 선언하고 있다.
   */
  const [background, setBackground] = useState(items[0]);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  /**
   * @description submit 발생 시 전달될 데이터를 담고 있는 state를 선언하고 있다.
   */
  const [formValues, setFormValues] = useState({
    name: '',
    backgroundColor: toggleState === '컬러' ? items[0] : 'beige',
    backgroundImageURL: toggleState === '이미지' ? items[0] : null,
  });

  /**
   * @description 이벤트 객체의 값이 비어있지 않으면 Button을 활성화시킨다.
   */
  const handleChange = e => {
    if (!e.target.value) {
      setIsBtnDisabled(true);
    } else {
      setIsBtnDisabled(false);
    }
    setFormValues({
      ...formValues,
      name: e.target.value,
    });
  };

  /**
   * @description 이벤트 객체의 내부 문자열을 toggleState의 새로운 값으로 변경한다.
   */
  const handleToggle = e => {
    const newToggleState = e.target.innerText;
    setToggleState(newToggleState);
  };

  /**
   * @param {*} background state background; Options에서 사용한다.
   * @param {*} index 선택한 요소의 index
   * @description 선택한 요소를 state formValues에 저장한다.
   */

  const handleSelect = (background, index) => {
    setFormValues(prevState => ({
      ...prevState,
      backgroundColor:
        toggleState === '컬러' ? items[index].replace(/[0-9]/g, '') : 'beige',
      backgroundImageURL: toggleState === '이미지' ? items[index] : null,
    }));
  };

  /**
   * @description form의 내용을 submit하는 함수를 선언하고 있다.
   * @requires {@link createRecipients}
   */
  const submitForm = async () => {
    try {
      const response = await createRecipients(formValues);
      navigate(`/post/${response.data.id}`);
    } catch (err) {
      errorAlert('/Post 페이지 생성에 실패했습니다.');
    }
  };

  /**
   * @description 기본동작을 없애고 submitForm을 실행한다.
   */
  const handleSubmit = e => {
    e.preventDefault();
    submitForm();
  };

  useEffect(() => {
    setFormValues(prevState => ({
      ...prevState,
      backgroundColor:
        toggleState === '컬러' ? items[0].replace(/[0-9]/g, '') : 'beige',
      backgroundImageURL: toggleState === '이미지' ? items[0] : null,
    }));
  }, [toggleState]);

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
            background={background}
            setBackground={setBackground}
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
const StyledBtn = styled(Button)`
  width: 72rem;

  font-size: 1.8rem;
  line-height: 2.8rem;
  letter-spacing: -0.01em;
`;

export default PostPage;
