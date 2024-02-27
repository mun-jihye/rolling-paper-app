import styled from 'styled-components';
import { PrimaryBtn } from './PrimaryBtn';

export const Secondary = styled(PrimaryBtn)`
  width: 122px;
  height: 40px;
  padding: 7px 16px;
  border-radius: 6px;
  border: 1px solid #9935ff;
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
