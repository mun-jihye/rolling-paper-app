import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  height: 3.6rem;
  padding: 0.6rem 1.6rem;
  border-radius: 0.6rem;
  background: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.gray400};
  text-align: center;
  gap: 0.9rem;

  @media ${({ theme }) => theme.breakpoint.mobile} {
    padding: 0.6rem 0.8rem;
  }
`;
export const StyledButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 2.15rem;
  position: relative;

  @media ${({ theme }) => theme.breakpoint.mobile} {
    gap: 1.6rem;
  }
`;
