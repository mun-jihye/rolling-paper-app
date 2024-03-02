import { useState } from 'react';
import style from 'styled-components';
import { InputStatus } from 'components/commons/form';

export default function TextFieldInput({ placeholder, disabled, error }) {
  const [status, setStatus] = useState(InputStatus.inActive);

  const handleFocus = () => {
    setStatus(InputStatus.focused);
  };

  const handleBlur = e => {
    if (!e.target.value) {
      error.message = '값을 입력해 주세요.';
      setStatus(InputStatus.error);
    } else {
      setStatus(InputStatus.inActive);
    }
  };

  const handleChange = e => {
    if (e.target.value) {
      setStatus(InputStatus.active);
    }
  };

  const handleMouseOver = () => {
    setStatus(InputStatus.hover);
  };

  const handleMouseOut = () => {
    setStatus(InputStatus.inActive);
  };

  return (
    <StyledDiv className="input-container">
      <StyledInput
        placeholder={placeholder}
        type="text"
        $status={status}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        disabled={disabled}
      />
      <StyledSpan>{error.message}</StyledSpan>
    </StyledDiv>
  );
}

const StyledDiv = style.div`
  display: flex;
  flex-direction: column;
  `;

const StyledInput = style.input`
  border-radius: 0.8rem;
  border: ${props => props.$status.border};
  color: ${props => props.$status.color};
  background-color: ${props => props.$status.backgroundColor};

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.6rem;
  letter-spacing: -0.001em;

  padding: 1.2rem 1.6rem;
  height: 5rem;
  width: 32rem;
`;

const StyledSpan = style.span`
  color: ${({ theme }) => theme.error};

  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: -0.005em;
`;
