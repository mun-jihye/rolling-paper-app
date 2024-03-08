import { postReactions } from 'api/reaction';
import { useMutation, useQueryClient } from 'react-query';
import { errorAlert } from 'utils/errorAlert';

export const usePostReactionQuery = postId => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: data => postReactions(postId, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['reaction', postId]);
    },
    onError: () => errorAlert({ title: '이모지 업데이트 실패' }),
  });
};
