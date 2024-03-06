import { getReactions } from 'api/reaction';
import { useQuery } from 'react-query';

export const useGetReactionQuery = postId => {
  return useQuery({
    queryKey: ['reaction', postId],
    queryFn: () => getReactions(postId),
  });
};
