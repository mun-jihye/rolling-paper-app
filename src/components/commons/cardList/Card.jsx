import styled from 'styled-components';
import bluePattern from 'components/assets/images/cardList/pattern_blue.png';
import greenPattern from 'components/assets/images/cardList/pattern_green.png';
import orangePattern from 'components/assets/images/cardList/pattern_orange.png';
import purplePattern from 'components/assets/images/cardList/pattern_purple.png';

function Card({ data }) {
  const StyledCard = styled.div`
    padding: 3rem 2.2rem 2rem 2.4rem;
    width: 20.8rem;
    height: 23.2rem;
    border-radius: 1.6rem;
    border: 0.1rem solid rgba(0, 0, 0, 0.1);
    background: ${({ theme }) =>
      data?.imageSource
        ? `linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%), url(${data?.imageSource})`
        : theme[BACK_GROUND[data?.color][0]]};
    background-image: ${data?.imageSource
      ? ''
      : `url(${BACK_GROUND[data?.color][1]})`};
    background-position: ${data?.imageSource ? 'center' : 'right bottom'};
    background-repeat: no-repeat;
    background-size: ${data?.imageSource ? 'cover' : '10.74rem'};
    box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
    cursor: pointer;

    @media (min-width: 48rem) {
      padding: 3rem 2.4rem 2rem;
      width: 27.5rem;
      height: 26rem;
      background-size: ${data?.imageSource ? 'cover' : '14.2rem'};
    }
  `;

  const StyledH3tag = styled.h3`
    overflow: hidden;
    color: ${({ theme }) => (data?.imageSource ? theme.white : theme.gray900)};
    text-overflow: ellipsis;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.8rem;
    letter-spacing: -0.018rem;

    @media (min-width: 48rem) {
      font-size: 2.4rem;
      line-height: 3.6rem;
      letter-spacing: -0.024rem;
    }
  `;

  const StyledPtag = styled.p`
    display: inline-block;
    color: ${({ theme }) => (data?.imageSource ? theme.white : theme.gray700)};
    font-size: 1.4rem;
    font-style: normal;
    font-weight: ${({ isNumber }) => (isNumber ? '700' : '400')};
    line-height: 2rem;
    letter-spacing: -0.007rem;

    @media (min-width: 48rem) {
      font-size: 1.6rem;
      line-height: 2.6rem;
      letter-spacing: -0.016rem;
    }
  `;

  return (
    <StyledCard>
      <StyledContainer isProfile={true}>
        <StyledH3tag>{`To. ${data?.name}`}</StyledH3tag>
        <StyledContainer isImage={true}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </StyledContainer>
        <StyledPtag>
          <StyledPtag isNumber={true}>{data?.count}</StyledPtag>명이 작성했어요!
        </StyledPtag>
      </StyledContainer>
      <StyledHrtag />
      <StyledContainer isBadge={true}>
        <div></div>
        <div></div>
        <div></div>
      </StyledContainer>
    </StyledCard>
  );
}

const BACK_GROUND = {
  purple: ['purple200', purplePattern],
  orange: ['orange200', orangePattern],
  blue: ['blue200', bluePattern],
  green: ['green200', greenPattern],
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: ${({ isProfile }) => (isProfile ? 'column' : 'row')};
  gap: ${({ isBadge, isImage }) =>
    isBadge ? '0.4rem' : isImage ? 0 : '1.2rem'};

  & div {
    height: ${({ isBadge, isImage }) =>
      isBadge ? '3.2rem' : isImage && '2.8rem'};
  }

  @media (min-width: 48rem) {
    gap: ${({ isBadge, isImage }) =>
      isBadge ? '0.8rem' : isImage ? 0 : '1.2rem'};

    & div {
      height: ${({ isBadge, isImage }) =>
        isBadge ? '3.6rem' : isImage && '2.8rem'};
    }
  }
`;

const StyledHrtag = styled.hr`
  height: 0.1rem;
  background: rgba(0, 0, 0, 0.12);
  margin-top: 3.3rem;
  margin-bottom: 1.6rem;
  border: none;

  @media (min-width: 48rem) {
    margin-top: 4.3rem;
  }
`;

export default Card;
