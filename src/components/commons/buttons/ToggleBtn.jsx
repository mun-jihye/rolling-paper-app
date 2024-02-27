// import { useState } from "react";
import { useState } from "react";
import styled from "styled-components";

const ToggleBtn = () => {
  const [isOn, setIsOn] = useState(true);
  const handlerIsOn = () => setIsOn(!isOn);

  return (
    <ToggleBox>
      <ToggleButton onClick={handlerIsOn}>컬러</ToggleButton>
      <ToggleButton>이미지</ToggleButton>
    </ToggleBox>
  );
};

const ToggleBox = styled.div`
  display: flex;
`;

const ToggleButton = styled.button`
  width: 122px;
  height: 40px;
  padding: 8px 16px;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 400;
  border: none;
  font-size: 16px;
  color: #181818;
  font-weight: 400;

  &:focus {
    border-radius: 6px;
    border: 2px solid #9935ff;
    background: #ffffff;
    font-weight: 700;
    color: #861dee;
  }
`;

export default ToggleBtn;
