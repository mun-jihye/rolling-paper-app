import { useState } from 'react';
import style from 'styled-components';
import { theme } from 'components/styles/theme';
import { DropDownStatus } from './DropDownStatus';
import arrowUp from 'components/assets/images/icons/arrow_top.svg';
import arrowDown from 'components/assets/images/icons/arrow_down.svg';
import CreateListItem from './CreateListItem.jsx';

export default function TextFieldDropDown() {
  const [status, setStatus] = useState(DropDownStatus.inActive);
  const [isVisible, setIsVisible] = useState(false);
  const [arrow, setArrow] = useState(arrowDown);
  const [selectedItem, setSelectedItem] = useState(null);
  const Lists = [
    'TextTextText1',
    'TextTextText2',
    'TextTextText3',
    'TextTextText4',
    'TextTextText5',
    'TextTextText6',
  ];
  const handleFocus = e => {
    setIsVisible(true);
    setStatus(DropDownStatus.active);
    setArrow(arrowUp);
    console.log('dropdown-active');
  };

  const handleBlur = event => {
    const dropdownList = document.querySelector('.dropdown-list');
    if (!dropdownList.contains(event.relatedTarget)) {
      setIsVisible(false);
      setStatus(DropDownStatus.inActive);
      setArrow(arrowDown);
      console.log('dropdown-inActive');
    }
  };

  const handleMouseOver = () => {
    if (status === DropDownStatus.active ? 0 : 1) {
      setStatus(DropDownStatus.hover);
      setArrow(arrowDown);
      console.log('dropdown-hover');
    }
  };

  const handleMouseOut = () => {
    if (status === DropDownStatus.active ? 0 : 1) {
      setStatus(DropDownStatus.inActive);
      setArrow(arrowDown);
      console.log('dropdown-inActive');
    }
  };

  const handleClickAndBlur = (event, index) => {
    event.preventDefault();
    setSelectedItem(Lists[index]);
    handleBlur(event);
  };

  return (
    <StyledDiv className="dropdown-container">
      <StyledDropDownButton
        $status={status}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></StyledDropDownButton>
      <StyledDropDownText $status={status}>{selectedItem}</StyledDropDownText>
      <img src={arrow} alt="arrow" style={{ pointerEvents: 'none' }} />
      {isVisible && (
        <CreateListItem
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          handleClickAndBlur={handleClickAndBlur}
          Lists={Lists}
        />
      )}
      <StyledSpan>Error Message</StyledSpan>
    </StyledDiv>
  );
}

const StyledDiv = style.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  position: relative;
  & > img {
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    left: 30rem;
    top: 1.8rem;
  }
`;

const StyledDropDownButton = style.button`
  border-radius: 0.8rem;
  border: ${props => props.$status.border};
  background-color: ${props => props.$status.backgroundColor};

  position: relative;
  padding: 1.2rem 1.6rem;
  height: 5rem;
  width: 32rem;
  gap: 1rem;
`;

const StyledDropDownText = style.span`
  color: ${props => props.$status.color};

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.6rem;
  letter-spacing: -0.001em;

  position: absolute;
  top: 1.4rem;
  left: 1.2rem;

`;

const StyledSpan = style.span`
  color: ${theme.error};
  color: ${theme.error};

  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: -0.005em;
`;
