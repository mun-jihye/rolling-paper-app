import React, { useState } from 'react';
import styled from 'styled-components';
import { DropDownStatus } from './DropDownStatus';

const Container = styled.div`
  display: flex;
  flexdirection: column;
`;

const DropdownButton = styled.button`
  position: relative;
  border: ${props => (props.status ? props.status.border : 'none')};
  borderradius: 0.8rem;
  padding: 1.2rem 1.6rem;
  height: 5rem;
  width: 32rem;
  color: ${props => (props.status ? props.status.color : 'none')};
  backgroundcolor: ${props =>
    props.status ? props.status.backgroundColor : 'none'};
  cursor: pointer;
`;

const DropdownContent = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
`;
export function DropDown({ status }) {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <DropdownButton onClick={() => setOpen(!open)}>Click me</DropdownButton>
      <DropdownContent status={status} open={open}>
        <DropdownItem href="#option1">Option 1</DropdownItem>
        <DropdownItem href="#option2">Option 2</DropdownItem>
        <DropdownItem href="#option3">Option 3</DropdownItem>
      </DropdownContent>
    </Container>
  );
}
