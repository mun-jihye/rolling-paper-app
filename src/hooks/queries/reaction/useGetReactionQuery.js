import { getReactions } from 'api/reaction';
import { useQuery } from 'react-query';
import { errorAlert } from 'utils/errorAlert';

/**
 * 이모지 조회 쿼리
 * @param {Number} postId 롤링페이퍼 대상 id
 * @returns
 */
export const useGetReactionQuery = postId => {
  return useQuery({
    queryKey: ['reaction', postId],
    queryFn: () => getReactions(postId),
    onError: () => errorAlert({ title: '이모지 조회 실패' }),
  });
};
