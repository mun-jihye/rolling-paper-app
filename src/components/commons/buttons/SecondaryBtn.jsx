import styled from 'styled-components';
import { Button } from './PrimaryBtn';

const SecondaryBtn = ({
  children,
  onClick,
  disabled,
  className,
  type = 'button',
}) => {
  return (
    <Secondary
      onClick={onClick}
      disabled={disabled}
      className={className}
      type={type}
    >
      {children}
    </Secondary>
  );
};

const Secondary = styled(Button)`
  width: 12.2rem;
  height: 4rem;
  padding: 0.7rem 1.6rem;
  border-radius: 0.6rem;
  border: 0.1rem solid ${({ theme }) => theme.purple600};
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.purple700};
  font-size: 1.6rem;
  font-weight: 400;

  &:hover {
    background: ${({ theme }) => theme.purple100};
  }
  &:focus {
    border: 0.1rem solid ${({ theme }) => theme.purple800};
    background: ${({ theme }) => theme.white};
  }
`;

export default SecondaryBtn;
