import { useState } from 'react';
import style from 'styled-components';
import { theme } from 'components/styles/theme';
import { DropDownStatus } from './DropDownStatus';
import arrowUp from 'components/assets/images/icons/arrow_top.svg';
import arrowDown from 'components/assets/images/icons/arrow_down.svg';

const StyledDiv = style.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
`;

const StyledDropDownButton = style.button`
  border-radius: 0.8rem;
  border: ${props => props.$status.border};
  color: ${props => props.$status.color};
  background-color: ${props => props.$status.backgroundColor};

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.6rem;
  letter-spacing: -0.001em;

  position: relative;
  padding: 1.2rem 1.6rem;
  height: 5rem;
  width: 32rem;
  gap: 1rem;
  & > img {
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    right: 0.5rem;
    bottom: 1.699rem;
  }
`;

const StyledList = style.div`
  border-radius: 0.8rem;
  border: 1px solid ${theme.gray300};
  box-shadow: 0px 2px 12px 0px #00000014;
  background-color: #fff;

  position: absolute;
  display: flex;
  flex-direction: column;

  width: 31.8rem;
  height: 22rem;
  top: 5.6rem;
  left: 0;
  padding: 1rem 0.1rem;
  z-index: 2;

  overflow: scroll;
`;

const StyledListItem = style.button`
  width: 31.6rem;
  height: 5rem;
  padding: 1.2rem 1.6rem;
  gap: 10px;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.6rem;
  letter-spacing: -0.001em;
  color: ${theme.gray900};

  &:hover {
    background-color: ${theme.gray100};
  }
`;

const StyledSpan = style.span`
  color: ${theme.error};
  color: ${theme.error};

  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: -0.005em;
`;

export default function TextFieldDropDown() {
  const [status, setStatus] = useState(DropDownStatus.inActive);
  const [isVisible, setIsVisible] = useState(false);
  const [arrow, setArrow] = useState(arrowDown);

  const handleFocus = e => {
    setIsVisible(true);
    setStatus(DropDownStatus.active);
    setArrow(arrowUp);
    console.log('active');
  };

  const handleBlur = () => {
    setIsVisible(false);
    setStatus(DropDownStatus.inActive);
    setArrow(arrowDown);
    console.log('inActive');
  };

  const handleMouseOver = () => {
    if (status === DropDownStatus.active ? 0 : 1) {
      setStatus(DropDownStatus.hover);
      setArrow(arrowDown);
      console.log('hover');
    }
  };

  const handleMouseOut = () => {
    if (status === DropDownStatus.active ? 0 : 1) {
      setStatus(DropDownStatus.inActive);
      setArrow(arrowDown);
      console.log('inActive');
    }
  };
  const handleSubmit = e => {
    console.log('submit');
  };

  return (
    <StyledDiv>
      <StyledDropDownButton
        $status={status}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img src={arrow} alt="arrow" />
        <form>
          {isVisible && (
            <StyledList alt="드롭다운 메뉴바">
              <StyledListItem onClick={handleSubmit}>
                TextTextText
              </StyledListItem>
              <StyledListItem onClick={handleSubmit}>
                TextTextText
              </StyledListItem>
              <StyledListItem onClick={handleSubmit}>
                TextTextText
              </StyledListItem>
              <StyledListItem onClick={handleSubmit}>
                TextTextText
              </StyledListItem>
            </StyledList>
          )}
        </form>
      </StyledDropDownButton>
      <StyledSpan>Error Message</StyledSpan>
    </StyledDiv>
  );
}
