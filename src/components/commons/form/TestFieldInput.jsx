import style from 'styled-components';

const StyledDiv = style.div`
  display: flex;
  flex-direction: column;
  `;

const StyledInput = style.input`
  border: ${props => props.status.borderColor};
  border-radius: 0.8rem;
  padding: 1.2rem 1.6rem;
  height: 5rem;
  width: 32rem;
  color: ${props => props.status.color};
  background-color: ${props => props.status.backgroundColor};
    
`;

const StyledSpan = style.span`
  color: ${({ theme }) => theme.error};
`;

export function TextFieldInput({ status }) {
  return (
    <StyledDiv>
      Input
      <StyledInput type="text" status={status} />
      <StyledSpan>message</StyledSpan>
    </StyledDiv>
  );
}
