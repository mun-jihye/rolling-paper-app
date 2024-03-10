import { deleteMessage } from 'api/message';
import { useMutation, useQueryClient } from 'react-query';
import { errorAlert } from 'utils/errorAlert';

/**
 * 메세지 삭제 요청 쿼리
 * @param {Number} messageId 삭제 요청 보낼 때 사용할 메세지 아이디
 * @returns
 */
export const useDeleteMessageQuery = (messageId, postId) => {
  const queryClient = useQueryClient();
  const deleteData = useMutation({
    mutationFn: () => deleteMessage(messageId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['message', postId],
        refetchActive: true,
        refetchInactive: true,
      });
    },
    onError: () => errorAlert({ title: '롤링페이퍼 메세지 삭제 실패' }),
  });
  return deleteData;
};
