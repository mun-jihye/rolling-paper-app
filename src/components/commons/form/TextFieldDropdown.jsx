import { useState } from 'react';
import styled from 'styled-components';
import { DropDownStatus } from './DropDownStatus';
import arrowUp from 'assets/images/forms/arrow_top.svg';
import arrowDown from 'assets/images/forms/arrow_down.svg';
import CreateListItem from './CreateListItem.jsx';

export default function TextFieldDropDown({
  disabled,
  error,
  initialSelectedItem,
  listItems,
  handleChange,
  ...props
}) {
  const [status, setStatus] = useState(DropDownStatus.inActive);
  const [isVisible, setIsVisible] = useState(false);
  const [arrow, setArrow] = useState(arrowDown);
  const [selectedItem, setSelectedItem] = useState(initialSelectedItem);
  const handleFocus = e => {
    setIsVisible(true);
    setStatus(DropDownStatus.active);
    setArrow(arrowUp);
  };

  const handleBlur = event => {
    const dropdownList = document.querySelector('.dropdown-list');
    if (!dropdownList.contains(event.relatedTarget)) {
      setIsVisible(false);
      setStatus(DropDownStatus.inActive);
      setArrow(arrowDown);
    }
  };

  const handleMouseOver = () => {
    if (status === DropDownStatus.active ? 0 : 1) {
      setStatus(DropDownStatus.hover);
      setArrow(arrowDown);
    }
  };

  const handleMouseOut = () => {
    if (status === DropDownStatus.active ? 0 : 1) {
      setStatus(DropDownStatus.inActive);
      setArrow(arrowDown);
    }
  };

  const handleClickAndBlur = (event, index) => {
    event.preventDefault();
    setSelectedItem(listItems[index]);
    handleBlur(event);
  };

  return (
    <StyledDiv className="dropdown-container" {...props}>
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
          listItems={listItems}
          handleChange={handleChange}
        />
      )}
      <StyledSpan>{error.message}</StyledSpan>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
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

const StyledDropDownButton = styled.button`
  border-radius: 0.8rem;
  border: ${props => props.$status.border};
  background-color: ${props => props.$status.backgroundColor};

  position: relative;
  padding: 1.2rem 1.6rem;
  height: 5rem;
  width: 32rem;
  gap: 1rem;
`;

const StyledDropDownText = styled.span`
  color: ${props => props.$status.color};

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.6rem;
  letter-spacing: -0.001em;

  position: absolute;
  top: 1.4rem;
  left: 1.2rem;
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.error};
  color: ${({ theme }) => theme.error};

  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: -0.005em;
`;
