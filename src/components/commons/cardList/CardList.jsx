import styled from 'styled-components';
import Card from './Card';
import { useEffect, useRef, useState } from 'react';
import Error from '../error/Error';
import ArrowButton from './ArrowButton';

/**
 * 롤링 페이퍼 목록을 보여주는 캐러셀 컴포넌트
 *
 * @param {number} carouselMargin container 내부의 캐러셀이 가지는 가로 여백
 * @param {Object} data 롤링 페이퍼에 들어갈 정보
 * @param {boolean} isLoading data 를 서버에서 불러오는 도중 인지에 대한 여부
 * @param {boolean} isError data 를 서버에서 불러오는 중 오류 발생에 대한 여부
 * @param {string} className styled.components 에서 스타일 재사용을 위한 prop
 * @returns {JSX.Element}
 */
function CardList({
  carouselMargin = 0,
  data: cards,
  isLoading,
  isError,
  className,
}) {
  const [containerWidth, setContainerWidth] = useState();
  const [carouselLength, setCarouselLength] = useState();
  const [slidePosition, setSlidePosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startTouchPosition, setStartTouchPosition] = useState(0);

  const containerRef = useRef();
  const cardRef = useRef();

  const handleLeftClick = () => {
    const carouselDistanceAtPC = 118;
    setSlidePosition(slidePosition + carouselDistanceAtPC);
  };

  const handleRightClick = () => {
    const carouselDistanceAtPC = 118;
    setSlidePosition(slidePosition - carouselDistanceAtPC);
  };

  function handleTouchStart(event) {
    setIsDragging(true);
    setStartTouchPosition(event.changedTouches[0].clientX);
  }

  function handleTouchMove(event) {
    if (!isDragging) return;
    if (carouselLength <= containerWidth) return;

    const currentTouchPosition = event.touches[0].clientX;
    const difference = startTouchPosition - currentTouchPosition;

    setSlidePosition(slidePosition - difference / 5);
    setStartTouchPosition(currentTouchPosition);
  }

  function handleTouchEnd() {
    setIsDragging(false);

    if (carouselLength <= containerWidth) return;

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
    const viewportWidthOfContainer = containerRef?.current?.offsetWidth;
    const viewportWidthOfCard = cardRef?.current?.offsetWidth;

    setContainerWidth(viewportWidthOfContainer - carouselMargin * 20);
    setCarouselLength(
      viewportWidthOfCard === 208
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
          $cardCount={cards?.length}
          style={{ transform: `translate(${slidePosition}rem)` }}
        >
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
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
          <ArrowButton onClick={handleLeftClick} position="left" />
        )}
        {slidePosition > -(29.5 * (cards?.length - 4) - 2) && (
          <ArrowButton onClick={handleRightClick} position="right" />
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
  transition: transform 0.7s;
  margin-left: ${({ $carouselMargin }) => $carouselMargin}rem;

  @media (min-width: 48rem) {
    gap: 2rem;
  }

  @media (min-width: 75rem) {
    justify-content: ${({ $cardCount }) => ($cardCount < 4 ? 'center' : '')};
  }
`;

export default CardList;
