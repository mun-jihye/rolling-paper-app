import styled from 'styled-components';

export const ButtonStyle = styled.button`
  background-color: ${({ theme }) => theme.purple600};
  border: none;
  color: white;
  padding: 1.4rem 2.4rem;
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.purple700};
  }
  &:focus {
    border: 2px solid #5603a7;
    background: ${({ theme }) => theme.purple600};
  }
  &:disabled {
    background: ${({ theme }) => theme.gray300};
  }

  width: ${props => props.width || '20rem'};
  height: ${props => props.height || '5.6rem'};
  border-radius: ${props => props.borderRadius || '1.2rem'};
  font-weight: ${props => props.fontWeight || '700'};
  font-size: ${props => props.fonSize || '1.6rem'};
`;

export function PrimaryBtn({
  width,
  height,
  borderRadius,
  fontWeight,
  fonSize,
}) {
  return (
    <div>
      <ButtonStyle
        width={width}
        height={height}
        borderRadius={borderRadius}
        fontWeight={fontWeight}
        fonSize={fonSize}
      >
        dfs
      </ButtonStyle>
      <ButtonStyle>dfs</ButtonStyle>
    </div>
  );
}
