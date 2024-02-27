import styled from "styled-components";
import OutSmlBtn from "./OutlSmlBtn";

const ArrowBtnR = () => {
  return (
    <ArrowButton>
      <img src="icon/left.svg" alt="left" />
    </ArrowButton>
  );
};

export const ArrowBtnL = () => {
  return (
    <ArrowButton>
      <img src="icon/right.svg" alt="right" />
    </ArrowButton>
  );
};

export const ArrowButton = styled(OutSmlBtn)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export default ArrowBtnR;
