import styled from 'styled-components';
import Plus from 'assets/images/buttons/plus.png';

const PlusBtn = ({ onClick, disabled, className, type = 'button' }) => {
  return (
    <PlusButton
      onClick={onClick}
      disabled={disabled}
      className={className}
      type={type}
    >
      <img src={Plus} alt="plus" />
    </PlusButton>
  );
};

const PlusButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.6rem;
  height: 5.6rem;
  padding: 1.6rem;
  border-radius: 50%;
  background: #555555;
  font-size: 2.4rem;
  color: white;
  cursor: pointer;

  &:hover {
    background: #4a4a4a;
  }
  &:focus {
    background: #3a3a3a;
    border: 0.1rem solid #2b2b2b;
  }
`;

export default PlusBtn;
