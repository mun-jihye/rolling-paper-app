import styled from 'styled-components';

const ListName = styled.h1`
  position: relative;
  color: ${({ theme }) => theme.black};
  font-size: 2rem;
  font-weight: 600;
  line-height: 3rem;
  margin-bottom: 0.2rem;
  margin-left: 2rem;

  @media (min-width: 48rem) {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.6rem;
    letter-spacing: -0.024rem;
    margin-bottom: 0.6rem;
    margin-left: 2.4rem;
  }

  @media (min-width: 75rem) {
    margin-left: 0;
  }
`;

export default ListName;
