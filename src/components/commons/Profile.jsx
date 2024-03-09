import styled from 'styled-components';

/**
 *
 * @param {object} props
 * @param {string} props.src 이미지 주소
 * @param {boolean} props.iscard 롤링페이퍼 메세지 카드인지 여부
 */
const Profile = ({ src, $iscard }) => {
  return (
    <ImgContainer $iscard={$iscard}>
      <img src={`${src}`} alt="프로필 이미지" />
    </ImgContainer>
  );
};

const ImgContainer = styled.div`
  width: ${props => (props.$iscard ? '5.6rem' : '2.8rem')};
  height: ${props => (props.$iscard ? '5.6rem' : '2.8rem')};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rem;
  border: 0.1rem solid
    ${({ theme, $iscard }) => ($iscard ? theme.gray200 : theme.white)};
`;

export default Profile;
