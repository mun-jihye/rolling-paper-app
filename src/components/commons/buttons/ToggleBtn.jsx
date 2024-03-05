import { useState } from "react";
import styled from "styled-components";

const ToggleBtn = ({ onClick, className, type = "button" }) => {
  const [isOn, setIsOn] = useState(true);

  const handleColorClick = (e) => {
    if (!isOn) {
      setIsOn(true);
      onClick(e);
    }
  };

  const handleImageClick = (e) => {
    if (isOn) {
      setIsOn(false);
      onClick(e);
    }
  };

  return (
    <div>
      <ToggleOption
        onClick={handleColorClick}
        className={className}
        type={type}
        selected={isOn}
      >
        컬러
      </ToggleOption>
      <ToggleOption
        onClick={handleImageClick}
        className={className}
        type={type}
        selected={!isOn}
      >
        이미지
      </ToggleOption>
    </div>
  );
};

const ToggleOption = styled.button`
  width: 12.2rem;
  height: 4rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.6rem;
  font-size: 1.6rem;
  font-weight: 400;
  border: none;
  color: ${({ theme, selected }) =>
    selected ? theme.purple700 : theme.gray900};
  border: ${({ theme, selected }) =>
    selected ? "0.2rem solid " + theme.purple600 : "none"};
  background: ${({ theme, selected }) =>
    selected ? theme.white : theme.gray100};
`;

export default ToggleBtn;
