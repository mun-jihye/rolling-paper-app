import { createMessage } from 'api/recipient';
import { useMutation, useQueryClient } from 'react-query';
import { errorAlert } from 'utils/errorAlert';

/**
 * 메세지 생성 쿼리
 * @param {Number} postId 롤링페이퍼 대상 아이디
 * @returns
 */
export const usePostMessagesQuery = postId => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async data => await createMessage(postId, data),
    onSuccess: async () => {
      await queryClient.invalidateQueries(['messages', postId]);
    },
    onError: () => errorAlert({ title: '메세지 생성 실패' }),
  });
};
