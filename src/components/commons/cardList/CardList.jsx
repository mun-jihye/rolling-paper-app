import styled from 'styled-components';
import Card from './Card';
import tempImg from 'assets/images/cardList/tempImg.jpg';
import arrowImg from 'assets/images/cardList/arrow.png';
import { useEffect, useRef, useState } from 'react';

const mockData = {
  name: 'Chanyong',
  color: 'blue',
  imageSource: tempImg,
  profiles: [
    { imageSource: tempImg },
    { imageSource: tempImg },
    { imageSource: tempImg },
    { imageSource: tempImg },
  ],
  badges: [{}, {}, {}, {}],
};

const mockDatas = Array.from({ length: 13 }, () => mockData);

function CardList({ carouselMargin = 0, className }) {
  const [containerWidth, setContainerWidth] = useState();
  const [carouselLength, setCarouselLength] = useState();
  // slidePosition 은 px 단위가 아닌 rem 단위
  const [slidePosition, setSlidePosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startTouchPosition, setStartTouchPosition] = useState(0);

  const container = useRef();
  const slideBar = useRef();
  const card = useRef();

  // PC 사이즈에서 화살표 클릭으로 캐러셀 제어
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

  // 태블릿, 모바일 사이즈에서 터치를 통해 캐러셀 제어
  function handleTouchStart(event) {
    setIsDragging(true);
    setStartTouchPosition(event.changedTouches[0].clientX);
  }

  function handleTouchMove(event) {
    if (!isDragging) return;
    if (carouselLength <= containerWidth) return;

    const slideNode = slideBar.current;
    const currentTouchPosition = event.touches[0].clientX;
    const difference = startTouchPosition - currentTouchPosition;

    slideNode.style.transform = `translate(${slidePosition - difference / 10}rem)`;
    setSlidePosition(slidePosition - difference / 10);
    setStartTouchPosition(currentTouchPosition);
  }

  function handleTouchEnd() {
    setIsDragging(false);

    if (carouselLength <= containerWidth) return;

    // 캐러셀 재위치
    const slideNode = slideBar.current;

    if (slidePosition > 0) {
      slideNode.style.transform = `translate(0)`;
      setSlidePosition(0);
      return;
    }

    if (slidePosition < (containerWidth - carouselLength) / 10) {
      slideNode.style.transform = `translate(${(containerWidth - carouselLength) / 10}rem)`;
      setSlidePosition((containerWidth - carouselLength) / 10);
      return;
    }
  }

  useEffect(() => {
    setContainerWidth(container?.current?.offsetWidth - carouselMargin * 20);
    setCarouselLength(
      card?.current?.offsetWidth === 208
        ? 220 * mockDatas?.length - 12
        : 295 * mockDatas?.length - 20,
    );
  }, [carouselMargin]);

  return (
    <StyledContainer $layout="outer" className={className}>
      <StyledContainer
        ref={container}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <StyledSlideBar ref={slideBar} $carouselMargin={carouselMargin}>
          {mockDatas.map((mockData, index) => {
            return (
              <div key={index + 1} ref={card}>
                <Card data={mockData} />
              </div>
            );
          })}
        </StyledSlideBar>
        {slidePosition < 0 && (
          <ArrowButton
            onClick={handleLeftClick}
            $position="left"
            src={arrowImg}
            alt="previous"
          />
        )}
        {slidePosition > -(29.5 * (mockDatas?.length - 4) - 2) && (
          <ArrowButton
            onClick={handleRightClick}
            $position="right"
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
  padding: 0.5rem 0;
  position: ${({ $layout }) => ($layout === 'outer' ? 'relative' : '')};
  overflow: ${({ $layout }) => ($layout === 'outer' ? '' : 'hidden')};
`;

const StyledSlideBar = styled.div`
  display: flex;
  gap: 1.2rem;
  transition: transform 0.5s;
  margin-left: ${({ $carouselMargin }) => $carouselMargin}rem;

  @media (min-width: 48rem) {
    gap: 2rem;
  }
`;

const ArrowButton = styled.img`
  display: none;
  width: 4rem;
  transform: ${({ $position }) =>
    $position === 'left' ? 'rotate(180deg)' : ''};
  position: absolute;
  left: ${({ $position }) => ($position === 'left' ? -2 : '')}rem;
  right: ${({ $position }) => ($position === 'right' ? -2 : '')}rem;
  top: 42.3%;
  cursor: pointer;

  @media (min-width: 75rem) {
    display: block;
  }
`;

export default CardList;
