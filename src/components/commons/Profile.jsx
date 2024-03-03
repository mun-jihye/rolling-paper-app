import styled from 'styled-components';

/**
 *
 * @param {object} prop
 * @param {string} prop.src 이미지 주소
 * @param {boolean} isCard
 */
const Profile = ({ src, isCard }) => {
  return (
    <ImgContainer isCard={isCard}>
      <img src={`${src}`} alt="프로필 이미지" />
    </ImgContainer>
  );
};

const ImgContainer = styled.div`
  width: ${props => (props.isCard ? '5.6rem' : '2.8rem')};
  height: ${props => (props.isCard ? '5.6rem' : '2.8rem')};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10rem;
  border: 0.1rem solid
    ${({ theme, isCard }) => (isCard ? theme.gray200 : theme.white)};
`;

export default Profile;
