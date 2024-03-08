import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  TextFieldInput,
  TextFieldDropDown,
  TextFieldTextEditor,
} from 'components/commons/form';
import GNB from 'components/commons/header/GNB';
import Button from 'components/commons/buttons/Button';
import person from 'assets/images/profiles/person.svg';
import { useParams, useNavigate } from 'react-router-dom';
import { AUTH } from 'utils/constants/API';
import { instance } from 'api/';
import { createMessage } from 'api/recipient';
import { errorAlert } from 'utils/errorAlert';

const MessagePage = () => {
  /**
   * @description 필요한 date를 useParams로 가져오고 있다.
   */
  const { postId } = useParams();
  /**
   * @description 필요한 state를 선언하고 있다.
   */
  const [imageURLs, setImageURLs] = useState([]);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  /**
   * @description 아래의 코드에서 필요한 상수와 함수를 선언하고 있다.
   */
  const inputDisabled = false;
  const dropDownDisabled = false;
  const error = { message: '' };
  const listItems = ['친구', '지인', '동료', '가족'];
  const listFontFamily = [
    'Noto Sans',
    'Pretendard',
    '나눔명조',
    '나눔손글씨 손편지체',
  ];
  const navigate = useNavigate();
  /**
   * @description TextFieldDropDown의 props로 전달될 기본값 데이터를 선언하고 있다.
   */
  const initialSelectedItem = ['지인', 'Noto Sans'];
  /**
   * @description submit 발생 시 전달될 데이터를 저장하는 state를 선언하고 있다.
   */
  const [formValues, setFormValues] = useState({
    sender: '',
    relationship: initialSelectedItem[0],
    content: '',
    font: initialSelectedItem[1],
    profileImageURL: null,
  });

  /**
   * @description formValues의 두 입력값을 비교해서 둘 다 빈 문자열이 아닐 때 Button을 활성화한다.
   */
  useEffect(() => {
    setIsBtnDisabled(!(formValues.sender.trim() && formValues.content.trim()));
  }, [formValues.sender, formValues.content]);

  /**
   * @description 프로필 이미지로 사용하기 위해 필요한 데이터를 get 요청으로 받아오고 있다.
   */
  useEffect(() => {
    const getProfileImages = async () => {
      const response = await instance.get(AUTH.profileImages);
      setImageURLs(response.data.imageUrls);
    };
    getProfileImages();
  }, []);

  /**
   * @description useEffect로 프로필 이미지를 불러온 다음에, 해당 이미지에서 index0인 이미지를 기본값으로 선언하고 있다.
   */
  useEffect(() => {
    if (imageURLs.length > 0) {
      setFormValues(prevState => ({
        ...prevState,
        profileImageURL: imageURLs[0],
      }));
    }
  }, []);

  /**
   * @description formValues의 sender 속성의 값을 이벤트 객체의 값으로 변경한다.
   */
  const handleInputChange = e => {
    setFormValues(prevState => ({ ...prevState, sender: e.target.value }));
  };

  /**
   * @description formValues의 ProfileImageURL 속성의 값을 이벤트 객체로 변경한다.
   */
  const handleImageChange = image => {
    setFormValues(prevState => ({ ...prevState, profileImageURL: image }));
  };

  /**
   * @description formValues의 relationship 속성의 값을 이벤트 객체로 변경한다.
   */
  const handleRelationshipChange = relationship => {
    setFormValues(prevState => ({ ...prevState, relationship }));
  };

  /**
   * @description formValues의 content 속성의 값을 이벤트 객체의 값으로 변경한다.
   */
  const handleEditorChange = e => {
    setFormValues(prevState => ({ ...prevState, content: e.target.value }));
  };

  /**
   * @description formValues의 font 속성의 값을 이벤트 객체로 변경한다.
   */
  const handleFontChange = font => {
    setFormValues(prevState => ({ ...prevState, font }));
  };

  /**
   * @description sumbmit 발생 시 api post 요청을 보낸 후, /post/recipientId 의 주소로 이동하는 함수를 선언하고 있다.
   * @requires {@link createMessage} {@link navigate}
   */
  const submitForm = async () => {
    try {
      const response = await createMessage(postId, formValues);
      navigate(`/post/${response.data.recipientId}`);
    } catch (err) {
      errorAlert('/Post{id}/message 페이지 생성에 실패했습니다.');
    }
  };

  /**
   * @description sumbmit 발생 시 기본동작을 취소하고 submitForm을 실행한다.
   */
  const handleSubmit = e => {
    e.preventDefault();
    submitForm();
  };

  return (
    <>
      <GNB />
      <AddMessageForm className="message-container">
        <NameContainer>
          <Description>From</Description>
          <NameInput
            placeholder={'이름을 입력해주세요.'}
            disabled={inputDisabled}
            error={error}
            handleChange={handleInputChange}
          />
          <ProfileContainer>
            <Description>프로필 이미지</Description>
            <div className="container">
              <ProfileImg $selectedImage={formValues.profileImageURL}>
                {!formValues.profileImageURL && (
                  <img src={person} alt="기본 이미지" />
                )}
              </ProfileImg>
              <div>
                <h3>프로필 이미지를 선택해주세요!</h3>
                <SampleImages>
                  {imageURLs.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt="샘플 이미지"
                      onClick={() => handleImageChange(image, index)}
                    />
                  ))}
                </SampleImages>
              </div>
            </div>
          </ProfileContainer>
          <RelationshipContainer>
            <Description>상대와의 관계</Description>
            <RelationshipDropDown
              disabled={dropDownDisabled}
              error={error}
              initialSelectedItem={initialSelectedItem[0]}
              listItems={listItems}
              handleChange={handleRelationshipChange}
            />
          </RelationshipContainer>
          <TextEditorContainer>
            <Description>내용을 입력해주세요</Description>
            <TextEditor handleChange={handleEditorChange} />
          </TextEditorContainer>
          <FontSelectContainer>
            <Description>폰트 선택</Description>
            <FontFamilyDropDown
              disabled={dropDownDisabled}
              error={error}
              initialSelectedItem={initialSelectedItem[1]}
              listItems={listFontFamily}
              handleChange={handleFontChange}
            />
          </FontSelectContainer>
          <StyledPrimary disabled={isBtnDisabled} onClick={handleSubmit}>
            생성하기
          </StyledPrimary>
        </NameContainer>
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

const NameContainer = styled.div`
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

const NameInput = styled(TextFieldInput)`
  width: 72rem;
  margin-top: 1.2rem;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 72rem;
  gap: 3.2rem;
  margin-top: 5rem;
  margin-bottom: 5rem;

  position: relative;
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.2rem;
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
const ProfileImg = styled.div`
  width: 8rem;
  height: 8rem;
  padding: 2.4rem;
  border-radius: 10rem;
  gap: 1rem;
  background-color: ${({ theme }) => theme.gray300};
  background-image: url(${props => props.$selectedImage});
  background-size: cover;
`;
const SampleImages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 60.5rem;
  cursor: pointer;
  img {
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
const RelationshipDropDown = styled(TextFieldDropDown)``;
const TextEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.2rem;
  margin-bottom: 5rem;
`;
const TextEditor = styled(TextFieldTextEditor)``;
const FontSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.2rem;
  margin-bottom: 3.8rem;
`;
const FontFamilyDropDown = styled(TextFieldDropDown)``;
const StyledPrimary = styled(Button)`
  width: 72rem;
`;

export default MessagePage;
