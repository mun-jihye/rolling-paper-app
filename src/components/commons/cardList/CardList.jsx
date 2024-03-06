import styled from 'styled-components';
import Card from './Card';
import arrowImg from 'assets/images/cardList/arrow.png';
import { useEffect, useRef, useState } from 'react';
import Error from '../error/Error';

function CardList({
  carouselMargin = 0,
  className,
  data: cards,
  isLoading,
  isError,
}) {
  const [containerWidth, setContainerWidth] = useState();
  const [carouselLength, setCarouselLength] = useState();
  // slidePosition 은 px 단위가 아닌 rem 단위
  const [slidePosition, setSlidePosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startTouchPosition, setStartTouchPosition] = useState(0);

  const containerRef = useRef();
  const cardRef = useRef();

  // PC 사이즈에서 화살표 클릭으로 캐러셀 제어
  const handleLeftClick = () => {
    const carouselDistanceAtPC = 118;
    setSlidePosition(slidePosition + carouselDistanceAtPC);
  };

  const handleRightClick = () => {
    const carouselDistanceAtPC = 118;
    setSlidePosition(slidePosition - carouselDistanceAtPC);
  };

  // 태블릿, 모바일 사이즈에서 터치를 통해 캐러셀 제어
  function handleTouchStart(event) {
    setIsDragging(true);
    setStartTouchPosition(event.changedTouches[0].clientX);
  }

  function handleTouchMove(event) {
    if (!isDragging) return;
    if (carouselLength <= containerWidth) return;

    const currentTouchPosition = event.touches[0].clientX;
    const difference = startTouchPosition - currentTouchPosition;

    setSlidePosition(slidePosition - difference / 10);
    setStartTouchPosition(currentTouchPosition);
  }

  function handleTouchEnd() {
    setIsDragging(false);

    if (carouselLength <= containerWidth) return;

    // 캐러셀 재위치
    if (slidePosition > 0) {
      setSlidePosition(0);
      return;
    }

    if (slidePosition < (containerWidth - carouselLength) / 10) {
      setSlidePosition((containerWidth - carouselLength) / 10);
      return;
    }
  }

  useEffect(() => {
    setContainerWidth(containerRef?.current?.offsetWidth - carouselMargin * 20);
    setCarouselLength(
      cardRef?.current?.offsetWidth === 208
        ? 220 * cards?.length - 12
        : 295 * cards?.length - 20,
    );
    setSlidePosition(0);
  }, [carouselMargin, cards]);

  return (
    <StyledContainer $layout="outer" className={className}>
      <StyledContainer
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <StyledSlideBar
          $carouselMargin={carouselMargin}
          style={{ transform: `translate(${slidePosition}rem)` }}
        >
          {isLoading
            ? [0, 1, 2, 3].map(index => (
                <Card key={index + 1} isLoading={isLoading} />
              ))
            : cards?.map(card => {
                return (
                  <div key={card?.id} ref={cardRef}>
                    <Card data={card} />
                  </div>
                );
              })}
          {isError && <Error />}
        </StyledSlideBar>
        {slidePosition < 0 && (
          <ArrowButton
            onClick={handleLeftClick}
            $position="left"
            src={arrowImg}
            alt="previous"
            disabled={!!isLoading}
          />
        )}
        {slidePosition > -(29.5 * (cards?.length - 4) - 2) && (
          <ArrowButton
            onClick={handleRightClick}
            $position="right"
            src={arrowImg}
            alt="next"
            disabled={!!isLoading}
          />
        )}
      </StyledContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  height: ${({ $layout }) => ($layout === 'outer' ? '25.2rem' : '')};
  padding: 0.5rem 0;
  position: ${({ $layout }) => ($layout === 'outer' ? 'relative' : '')};
  overflow: ${({ $layout }) => ($layout === 'outer' ? '' : 'hidden')};

  @media (min-width: 48rem) {
    height: ${({ $layout }) => ($layout === 'outer' ? '28rem' : '')};
  }

  @media (min-width: 75rem) {
    padding-left: ${({ $layout }) => ($layout === 'outer' ? '' : '0.5rem')};
    padding-right: ${({ $layout }) => ($layout === 'outer' ? '' : '0.5rem')};
    left: -0.5rem;
    width: ${({ $layout }) => ($layout === 'outer' ? '117rem' : '')};
  }
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
  left: ${({ $position }) => ($position === 'left' ? -1.5 : '')}rem;
  right: ${({ $position }) => ($position === 'right' ? -1.5 : '')}rem;
  top: 42.3%;
  cursor: pointer;

  @media (min-width: 75rem) {
    display: block;
  }
`;

export default CardList;
