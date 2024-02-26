import styled from "styled-components";

const PrimaryBtn = () => {
  return <Button>Button</Button>;
};

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #9935ff;
  border: none;
  color: white;
  width: 208px;
  height: 56px;
  padding: 14px 24px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background: #861dee;
  }
  &:focus {
    border: 2px solid #5603a7;
    background: #6e0ad1;
  }
  &:disabled {
    background: #cccccc;
  }
`;

export default PrimaryBtn;
