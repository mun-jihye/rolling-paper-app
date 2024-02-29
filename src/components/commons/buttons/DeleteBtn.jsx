import styled from 'styled-components';
import { StyledButton } from './OutlinedBtn';
import DeleteIcon from 'components/assets/images/buttons/delete.png';

const DeleteBtn = () => {
  return (
    <DeleteButton>
      <img src={DeleteIcon} alt="Delete" />
    </DeleteButton>
  );
};

const DeleteButton = styled(StyledButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.6rem;
  height: 3.6rem;
  padding: 0.6rem;
`;

export default DeleteBtn;
