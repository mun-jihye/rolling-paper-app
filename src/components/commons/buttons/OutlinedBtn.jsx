import styled from 'styled-components';
import { ButtonStyle } from './PrimaryBtn';

const OutBtn = styled(ButtonStyle)`
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
`;

export function OutlineBtn() {
  return (
    <div>
      <OutBtn>dfs</OutBtn>
    </div>
  );
}
