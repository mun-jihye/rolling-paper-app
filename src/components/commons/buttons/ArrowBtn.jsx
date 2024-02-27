import styled from 'styled-components';
import R from './icon/R.svg';
import L from './icon/L.svg';

export const ArrowBtnR = () => {
  return (
    <ArrowButton>
      <img src={R} alt="left" />
    </ArrowButton>
  );
};

export const ArrowBtnL = () => {
  return (
    <ArrowButton>
      <img src={L} alt="right" />
    </ArrowButton>
  );
};

const ArrowButton = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.gray300};
  background: #ffffffe5;
  box-shadow: 0px 4px 8px 0px #00000014;
`;
