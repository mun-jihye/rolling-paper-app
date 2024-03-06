import { getReactions, postReactions } from 'api/reaction';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export const useGetReactionQuery = postId => {
  return useQuery({
    queryKey: ['reaction', postId],
    queryFn: () => getReactions(postId),
  });
};
export const usePostReactionQuery = (postId, data) => {
  // const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['reaction', postId],
    mutationFn: () => postReactions(postId, data),
  });
};
