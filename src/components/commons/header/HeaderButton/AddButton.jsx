import styled from 'styled-components';
import { StyledButton } from 'components/commons/header/HeaderStyled/ButtonContainer';
import AddImage from 'assets/images/headers/AddImage.svg';

export const AddButton = ({ onClick, text }) => (
  <StyledButton onClick={onClick}>
    <img src={AddImage} alt="Add" />
    <AddText>{text}</AddText>
  </StyledButton>
);

const AddText = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
