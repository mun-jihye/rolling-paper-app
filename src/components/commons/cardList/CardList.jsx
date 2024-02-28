import styled from 'styled-components';
import Card from './Card';

function CardList() {
  return (
    <div>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

const StyledContainer = styled.div`
  display: flex;
  gap 
`;

export default CardList;
