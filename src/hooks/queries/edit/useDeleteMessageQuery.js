import { deleteMessage } from 'api/message';
import { useMutation, useQueryClient } from 'react-query';
import { errorAlert } from 'utils/errorAlert';

export const useDeleteMessageQuery = messageId => {
  const queryClient = useQueryClient();
  const deleteData = useMutation({
    mutationFn: () => deleteMessage(messageId),
    onSuccess: () => {
      queryClient.invalidateQueries(['message', messageId]);
    },
    onError: () => errorAlert({ title: '롤링페이퍼 메세지 삭제 실패' }),
  });
  return deleteData;
};
