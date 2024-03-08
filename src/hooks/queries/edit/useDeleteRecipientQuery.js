import { deleteRecipient } from 'api/recipient';
import { useMutation, useQueryClient } from 'react-query';
import { errorAlert } from 'utils/errorAlert';

export const useDeleteRecipientQuery = postId => {
  const queryClient = useQueryClient();
  const deleteData = useMutation({
    mutationFn: () => deleteRecipient(postId),
    onSuccess: () => {
      queryClient.invalidateQueries(['recipient', postId]);
    },
    onError: () => errorAlert({ title: '롤링페이퍼 대상 삭제 실패' }),
  });
  return deleteData;
};
