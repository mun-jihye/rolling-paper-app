import styled from 'styled-components';
import FromCard from './FromCard';
import { formatDate } from 'utils/date';
import AddCard from './AddCard';
import FromCardSkeleton from './FromCardSkeleton';

/**
 *
 * @param {Object} props
 * @param {Object} props.datas 서버에서 받아온 메세지들
 * @param {Boolean} props.isDelete 편집 모드 여부
 * @param {Boolean} props.isFetchingNextPage 무한 스크롤 로딩 여부
 * @returns
 */
const FromCardList = ({ datas, isDelete, isFetchingNextPage }) => {
  const skeletonCount = 3 - ((datas?.length % 3) + 1);

  return (
    <GridContainer>
      <AddCard isDelete={isDelete} />
      {datas?.map(data => {
        const {
          id,
          sender,
          profileImageURL,
          relationship,
          content,
          createdAt,
          font,
        } = data;
        const formattedDate = formatDate(createdAt);
        return (
          <FromCard
            key={id}
            font={font}
            messageId={id}
            profileImageURL={profileImageURL}
            sender={sender}
            relationship={relationship}
            content={content}
            formattedDate={formattedDate}
            isDelete={isDelete}
          />
        );
      })}
      {isFetchingNextPage &&
        Array.from({ length: skeletonCount }).map((_, index) => (
          <FromCardSkeleton key={index} />
        ))}
    </GridContainer>
  );
};
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
export default FromCardList;
