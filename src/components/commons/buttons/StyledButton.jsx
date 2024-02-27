import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 200px;
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

  color: ${props => props.color || 'gray'};
  background: ${props => props.background || 'white'};
`;

function Button({ children, color, background }) {
  return (
    <StyledButton color={color} background={background} Î>
      {children}
    </StyledButton>
  );
}

export default Button;
