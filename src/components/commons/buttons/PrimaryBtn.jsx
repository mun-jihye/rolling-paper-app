import styled from 'styled-components';

const PrimaryBtn = ({
  children,
  onClick,
  disabled,
  className,
  type = 'button',
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={className}
      type={type}
    >
      {children}
    </Button>
  );
};

export const Button = styled.button`
  padding: 1.4rem 2.4rem;
  width: 20rem;
  height: 5.6rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.purple600};
  border: none;
  color: ${({ theme }) => theme.white};
  font-size: 1.8rem;
  font-weight: 700;
  &:hover {
    background: ${({ theme }) => theme.purple700};
  }
  &:focus {
    border: 2px solid ${({ theme }) => theme.purple900};
    background: ${({ theme }) => theme.purple600};
  }
  &:disabled {
    background: ${({ theme }) => theme.gray300};
  }
  @media (max-width: 90rem) {
    padding: 0.7rem 1.6rem;
    width: 12rem;
    height: 4rem;
    border-radius: 0.6rem;
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

export default PrimaryBtn;
