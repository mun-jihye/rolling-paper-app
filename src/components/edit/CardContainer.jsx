import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 38.4rem;
  height: 28rem;
  transition:
    width 0.3s,
    height 0.3s;
  background-color: ${({ theme }) => theme.white};
  border-radius: 1.6rem;
  padding: 3.5rem;
  box-shadow: 0px 2px 12px 0px #00000014;

  @media (max-width: 1248px) {
    width: 35.2rem;
    height: 28.4rem;
  }

  @media (max-width: 768px) {
    width: 32rem;
    height: 23rem;
  }
`;
