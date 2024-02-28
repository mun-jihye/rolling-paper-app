import styled from 'styled-components';
import Card from './Card';
import tempImg from 'components/assets/images/cardList/tempImg.jpg';
import arrowImg from 'components/assets/images/cardList/arrow.png';
import { useRef, useState } from 'react';

const mockData = {
  name: 'Chanyong',
  color: 'green',
  imageSource: tempImg,
  profiles: [
    { imageSource: tempImg },
    { imageSource: tempImg },
    { imageSource: tempImg },
    { imageSource: tempImg },
  ],
};

const mockDatas = Array.from({ length: 9 }, () => mockData);

function CardList() {
  const slideBar = useRef();
  const [slidePosition, setSlidePosition] = useState(0);

  const handleLeftClick = () => {
    const slideNode = slideBar.current;
    setSlidePosition(slidePosition + 118);
    slideNode.style.transform = `translate(${slidePosition + 118}rem)`;
  };

  const handleRightClick = () => {
    const slideNode = slideBar.current;
    setSlidePosition(slidePosition - 118);
    slideNode.style.transform = `translate(${slidePosition - 118}rem)`;
  };

  return (
    <StyledContainer layout="outer">
      <StyledContainer>
        <StyledSlideBar ref={slideBar}>
          {mockDatas.map((mockData, index) => {
            return <Card key={index + 1} data={mockData} />;
          })}
        </StyledSlideBar>
        {slidePosition < 0 && (
          <ArrowButton
            onClick={handleLeftClick}
            position="left"
            src={arrowImg}
            alt="previous"
          />
        )}
        {slidePosition > -(29.5 * (mockDatas?.length - 4) - 2) && (
          <ArrowButton
            onClick={handleRightClick}
            position="right"
            src={arrowImg}
            alt="next"
          />
        )}
      </StyledContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  max-width: 116rem;
  position: ${({ layout }) => (layout === 'outer' ? 'relative' : '')};
  overflow: ${({ layout }) => (layout === 'outer' ? '' : 'hidden')};
`;

const StyledSlideBar = styled.div`
  display: flex;
  gap: 2rem;
  transition: transform 0.5s;
`;

const ArrowButton = styled.img`
  width: 4rem;
  transform: ${({ position }) => (position === 'left' ? 'rotate(180deg)' : '')};
  position: absolute;
  left: ${({ position }) => (position === 'left' ? -2 : '')}rem;
  right: ${({ position }) => (position === 'right' ? -2 : '')}rem;
  top: 42.3%;
  cursor: pointer;
`;

export default CardList;
