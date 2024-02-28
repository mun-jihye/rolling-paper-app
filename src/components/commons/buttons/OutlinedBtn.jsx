import styled from 'styled-components';
import { Button } from './PrimaryBtn';

const OutlinedBtn = ({
  children,
  onClick,
  disabled,
  className,
  type = 'button',
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      className={className}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.gray300};
  color: ${({ theme }) => theme.gray300};
  background: ${({ theme }) => theme.white};

  &:hover {
    background: ${({ theme }) => theme.gray100};
    border: 1px solid ${({ theme }) => theme.gray300};
  }
  &:focus {
    background: ${({ theme }) => theme.white};
    border: 1px solid ${({ theme }) => theme.gray100};
  }
  @media (max-width: 80rem) {
    height: 3.6rem;
  }
  @media (max-width: 70rem) {
    height: 2.8rem;
  }
`;
export default OutlinedBtn;
