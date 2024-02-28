import { useState } from 'react';
import style from 'styled-components';
import { theme } from 'components/styles/theme';
import { InputStatus } from 'components/commons/form';

export default function TextFieldInput() {
  const [status, setStatus] = useState(InputStatus.inActive);

  const handleFocus = () => {
    setStatus(InputStatus.focused);
    console.log('input-focused');
  };

  const handleBlur = () => {
    setStatus(InputStatus.inActive);
    console.log('input-inActive');
  };

  const handleChange = e => {
    if (e.target.value) {
      setStatus(InputStatus.active);
      console.log('input-active');
    }
  };

  const handleMouseOver = () => {
    setStatus(InputStatus.hover);
    console.log('input-hover');
  };

  const handleMouseOut = () => {
    setStatus(InputStatus.inActive);
    console.log('input-inActive');
  };

  return (
    <StyledDiv className="input-container">
      <StyledInput
        placeholder="input-Placeholder"
        type="text"
        $status={status}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
      <StyledSpan>Error Message</StyledSpan>
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
  color: ${theme.error};

  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: -0.005em;
`;