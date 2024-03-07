import { getReactions, postReactions } from 'api/reaction';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { errorAlert } from 'utils/errorAlert';

export const useGetReactionQuery = postId => {
  return useQuery({
    queryKey: ['reaction', postId],
    queryFn: () => getReactions(postId),
    onError: errorAlert({ title: '이모지 조회 실패' }),
  });
};

export const usePostReactionQuery = postId => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: data => postReactions(postId, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['reaction', postId]);
    },
    onError: errorAlert({ title: '이모지 업데이트 실패' }),
  });
};
