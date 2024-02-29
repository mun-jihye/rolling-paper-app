import styled from 'styled-components';
import R from 'components/assets/images/buttons/arrowRight.png';
import L from 'components/assets/images/buttons/arrowLeft.png';

export const ArrowBtnR = ({
  onClick,
  disabled,
  className,
  type = 'button',
}) => {
  return (
    <ArrowButton
      onClick={onClick}
      disabled={disabled}
      className={className}
      type={type}
    >
      <img src={R} alt="left" />
    </ArrowButton>
  );
};

export const ArrowBtnL = ({
  onClick,
  disabled,
  className,
  type = 'button',
}) => {
  return (
    <ArrowButton
      onClick={onClick}
      disabled={disabled}
      className={className}
      type={type}
    >
      <img src={L} alt="right" />
    </ArrowButton>
  );
};

const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.gray300};
  background: ${({ theme }) => theme.white};
  box-shadow: 0 0.4rem 0.8rem 0 #00000014;
`;
