import styled from 'styled-components';
import { Button } from './PrimaryBtn';

export const Secondary = styled(Button)`
  width: 122px;
  height: 40px;
  padding: 7px 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.purple600};
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.purple700};
  font-size: 16px;
  font-weight: 400;

  &:hover {
    background: ${({ theme }) => theme.purple100};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.purple800};
    background: ${({ theme }) => theme.white};
  }
`;
const SecondaryBtn = ({
  children,
  onClick,
  disabled,
  className,
  type = 'button',
}) => {
  return (
    <SecondaryBtn
      onClick={onClick}
      disabled={disabled}
      className={className}
      type={type}
    >
      {children}
    </SecondaryBtn>
  );
};
export default SecondaryBtn;
