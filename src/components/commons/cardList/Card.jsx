import styled from 'styled-components';
import Profile from 'components/commons/Profile';
import bluePattern from 'assets/images/cardList/pattern_blue.png';
import greenPattern from 'assets/images/cardList/pattern_green.png';
import orangePattern from 'assets/images/cardList/pattern_orange.png';
import purplePattern from 'assets/images/cardList/pattern_purple.png';
import EmojiBadge from '../badges/EmojiBadge';

function Card({ data }) {
  return (
    <StyledCard $data={data}>
      <StyledContainer $isProfile={true}>
        <StyledH3tag $data={data}>{`To. ${data?.name}`}</StyledH3tag>
        <StyledContainer $isImage={true}>
          {data?.profiles?.slice(0, 3).map((profile, index) => {
            return (
              <ProfileContainer key={index + 1} $index={index}>
                <Profile src={profile?.imageSource} $isModal={false} />
              </ProfileContainer>
            );
          })}
          {data?.profiles?.length > 3 && (
            <LastProfile>+{data?.profiles?.length - 3}</LastProfile>
          )}
        </StyledContainer>
        <StyledText $data={data}>
          <StyledText $data={data} $isNumber={true}>
            {data?.profiles?.length}
          </StyledText>
          명이 작성했어요!
        </StyledText>
      </StyledContainer>
      <StyledHrtag />
      <StyledContainer $isBadge={true}>
        {data?.badges?.slice(0, 3).map((badge, index) => {
          return <CardEmojiBadge key={index + 1} data={badge} />;
        })}
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

const StyledCard = styled.div`
  padding: 3rem 2.2rem 2rem 2.4rem;
  flex-shrink: 0;
  width: 20.8rem;
  height: 23.2rem;
  border-radius: 1.6rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  background: ${({ theme, $data }) =>
    $data?.imageSource
      ? // 배경 이미지가 존재할 경우, 배경을 이미지로 설정
        `linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%), url(${$data?.imageSource})`
      : // 배경 이미지 없으면 원하는 색의 default 배경 설정
        theme[BACK_GROUND[$data?.color][0]]};
  background-image: ${({ $data }) =>
    $data?.imageSource ? '' : `url(${BACK_GROUND[$data?.color][1]})`};
  background-position: ${({ $data }) =>
    $data?.imageSource ? 'center' : 'right bottom'};
  background-repeat: no-repeat;
  background-size: ${({ $data }) =>
    $data?.imageSource ? 'cover' : '10.74rem'};
  box-shadow: 0 0.2rem 1.2rem 0 rgba(0, 0, 0, 0.08);
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    transition: transform 0.5s;
  }

  &:active {
    transform: scale(0.9);
    transition: transform 0.5s;
  }

  @media (min-width: 48rem) {
    padding: 3rem 2.4rem 2rem;
    width: 27.5rem;
    height: 26rem;
    background-size: ${({ $data }) =>
      $data?.imageSource ? 'cover' : '14.2rem'};
  }
`;

const StyledH3tag = styled.h3`
  overflow: hidden;
  color: ${({ theme, $data }) =>
    $data?.imageSource ? theme.white : theme.gray900};
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

const StyledText = styled.div`
  display: inline-block;
  color: ${({ theme, $data }) =>
    $data?.imageSource ? theme.white : theme.gray700};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: ${({ $isNumber }) => ($isNumber ? '700' : '400')};
  line-height: 2rem;
  letter-spacing: -0.007rem;

  @media (min-width: 48rem) {
    font-size: 1.6rem;
    line-height: 2.6rem;
    letter-spacing: -0.016rem;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: ${({ $isProfile }) => ($isProfile ? 'column' : 'row')};
  gap: ${({ $isBadge, $isImage }) =>
    $isBadge ? '0.4rem' : $isImage ? 0 : '1.2rem'};

  & div {
    height: ${({ $isBadge, $isImage }) =>
      $isBadge ? '3.2rem' : $isImage && '2.8rem'};
  }

  @media (min-width: 48rem) {
    gap: ${({ $isBadge, $isImage }) =>
      $isBadge ? '0.8rem' : $isImage ? 0 : '1.2rem'};

    & div {
      height: ${({ $isBadge, $isImage }) =>
        $isBadge ? '3.6rem' : $isImage && '2.8rem'};
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

const ProfileContainer = styled.div`
  position: relative;
  left: ${({ $index }) => $index * -1.2}rem;
`;

const LastProfile = styled.div`
  position: relative;
  padding: 0.5rem 0.6rem;
  left: -3.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.gray500};
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  letter-spacing: -0.006rem;
  min-width: 2.8rem;
`;

const CardEmojiBadge = styled(EmojiBadge)`
  align-items: start;

  @media (max-width: 48rem) {
    align-items: start;
    width: 5.5rem;
    height: 3.2rem;

    & div {
      font-size: 1.4rem;
      line-height: 1.6rem;
      letter-spacing: -0.007rem;
    }
  }
`;

export default Card;
