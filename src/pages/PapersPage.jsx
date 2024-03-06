import Card from 'components/commons/cardList/Card';
import GNB from 'components/commons/header/GNB';
import mockDatas from 'data/papersPage';
import styled from 'styled-components';

const PapersPage = () => {
  return (
    <div>
      <GNB />
      <GridContainer>
        {mockDatas?.map(mockData => {
          return <Card key={mockData.id} data={mockData} />;
        })}
      </GridContainer>
    </div>
  );
};

export default PapersPage;

const GridContainer = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;
  align-items: center;
  @media ${({ theme }) => theme.breakpoint.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${({ theme }) => theme.breakpoint.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
