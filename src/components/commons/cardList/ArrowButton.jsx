import arrowImg from 'assets/images/cardList/arrow.png';
import styled from 'styled-components';

/**
 * CardList 캐러셀 넘기기 위한 양쪽 화살표 버튼 컴포넌트
 *
 * @param {Function} onClick 캐러셀 위치 변경 함수
 * @param {"left" | "right"} position 캐러셀 왼쪽 버튼인지, 오른쪽 버튼인지에 대한 정보
 * @returns {JSX.Element}
 */
const ArrowButton = ({ onClick, position }) => {
  return (
    <StyledArrowButton
      src={arrowImg}
      alt={position === 'left' ? '이전' : '다음'}
      onClick={onClick}
      $position={position}
    />
  );
};

const StyledArrowButton = styled.img`
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

export default ArrowButton;
