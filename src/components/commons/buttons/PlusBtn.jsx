import styled from 'styled-components';
import Plus from './icon/plus.svg';

const PlusBtn = () => {
  return (
    <PlusButton>
      <img src={Plus} alt="plus" />
    </PlusButton>
  );
};

const PlusButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  padding: 16px;
  border-radius: 50%;
  background: #555555;
  font-size: 24px;
  color: white;
  cursor: pointer;

  &:hover {
    background: #4a4a4a;
  }
  &:focus {
    background: #3a3a3a;
    border: 1px solid #2b2b2b;
  }
`;

export default PlusBtn;
