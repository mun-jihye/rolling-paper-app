import { getReactions } from 'api/reaction';
import { useQuery } from 'react-query';
import { errorAlert } from 'utils/errorAlert';

export const useGetReactionQuery = postId => {
  return useQuery({
    queryKey: ['reaction', postId],
    queryFn: () => getReactions(postId),
    onError: () => errorAlert({ title: '이모지 조회 실패' }),
  });
};
