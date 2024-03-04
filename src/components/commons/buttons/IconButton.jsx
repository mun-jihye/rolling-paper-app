import React from 'react';
import styled, { css } from 'styled-components';
import ArrowR from 'assets/images/buttons/arrowRight.png';
import ArrowL from 'assets/images/buttons/arrowLeft.png';
import Delete from 'assets/images/buttons/delete.png';

function IconButton({
  icon,
  style,
  onClick,
  disabled,
  className,
  type = 'button',
  ...props
}) {
  const Icon = ({ icon }) => {
    if (icon === 'arrowR') {
      return <img src={ArrowR} alt="오른쪽" />;
    }
    if (icon === 'arrowL') {
      return <img src={ArrowL} alt="왼쪽" />;
    }
    if (icon === 'delete') {
      return <img src={Delete} alt="삭제" />;
    }
  };
  return (
    <StyledButton
      style={style}
      onClick={onClick}
      disabled={disabled}
      className={className}
      type={type}
      {...props}
    >
      <Icon icon={icon} />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 0.1rem solid ${({ theme }) => theme.gray300};
  background: ${({ theme }) => theme.white};
  box-shadow: 0 0.4rem 0.8rem 0 #00000014;

  ${props =>
    props.Delete &&
    css`
      border: 0.1rem solid ${({ theme }) => theme.gray300};
      color: ${({ theme }) => theme.gray900};
      background: ${({ theme }) => theme.white};
      width: 3.6rem;
      height: 3.6rem;
      padding: 0.6rem;
      border-radius: 0.8rem;
      &:hover {
        background: ${({ theme }) => theme.gray100};
        border: 0.1rem solid ${({ theme }) => theme.gray300};
      }
      &:focus {
        background: ${({ theme }) => theme.white};
        border: 0.1rem solid ${({ theme }) => theme.gray500};
      }
    `}
`;

export default IconButton;
