import { getReactions, postReactions } from 'api/reaction';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export const useGetReactionQuery = postId => {
  return useQuery({
    queryKey: ['reaction', postId],
    queryFn: () => getReactions(postId),
  });
};
export const usePostReactionQuery = postId => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: data => postReactions(postId, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['reaction', postId]);
    },
  });
};
