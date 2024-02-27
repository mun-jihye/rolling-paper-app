import style from 'styled-components';
import { useState } from 'react';
import { theme } from 'components/styles/theme';

const StyledDiv = style.div`
  display: flex;
  flex-direction: column;
  `;

const styledThemes = {
  inActive: {
    color: theme.gray300,
    borderColor: theme.gray300,
    backgroundColor: theme.gray500,
  },
  focused: {
    color: theme.gray900,
    borderColor: theme.gray500,
  },
  active: {
    color: theme.gray900,
    borderColor: theme.gray700,
  },
  hover: {
    color: theme.gray500,
    borderColor: theme.gray500,
  },
  disabled: {
    color: theme.gray400,
    borderColor: theme.gray300,
    backgroundColor: theme.gray100,
  },
  error: {
    color: theme.gray900,
    borderColor: theme.error,
  },
};

const StyledInput = style.input`
  border: 1px solid ${props => props.styledTheme.borderColor};
  border-radius: 0.8rem;
  padding: 1.2rem 1.6rem;
  height: 5rem;
  width: 32rem;
  color: ${props => props.styledTheme.color};
  background-color: ${props => props.styledTheme.backgroundColor};
    
`;

const StyledSpan = style.span`
  color: ${theme.error};
`;

export function TextFieldInput() {
  const [styledTheme, setStyledTheme] = useState(styledThemes.error);
  return (
    <StyledDiv>
      Input
      <StyledInput type="text" styledTheme={styledTheme} />
      <StyledSpan>message</StyledSpan>
    </StyledDiv>
  );
}
