import styled from 'styled-components';
import Card from './Card';
import tempImg from 'components/assets/images/cardList/tempImg.jpg';

const mockData = {
  count: 30,
  name: 'Chanyong',
  color: 'green',
  imageSource: tempImg,
};

function CardList() {
  return (
    <StyledContainer>
      <Card data={mockData} />
      <Card data={mockData} />
      <Card data={mockData} />
      <Card data={mockData} />
      <Card data={mockData} />
      <Card data={mockData} />
      <Card data={mockData} />
      <Card data={mockData} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  gap: 10px;
`;

export default CardList;
