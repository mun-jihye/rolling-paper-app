import { postReactions } from 'api/reaction';
import { useMutation, useQueryClient } from 'react-query';
import { errorAlert } from 'utils/errorAlert';

/**
 * 이모지 업데이트 쿼리
 * @param {Number} postId 롤링페이퍼 대상 아이디
 * @returns
 */
export const usePostReactionQuery = postId => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async data => await postReactions(postId, data),
    onSuccess: async () => {
      await queryClient.invalidateQueries(['reaction', postId]);
    },
    onError: () => errorAlert({ title: '이모지 업데이트 실패' }),
  });
};
