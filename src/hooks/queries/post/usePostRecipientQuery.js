import { createRecipients } from 'api/recipient';
import { useMutation, useQueryClient } from 'react-query';
import { errorAlert } from 'utils/errorAlert';

/**
 * 롤링페이퍼 대상 생성 쿼리
 */
export const usePostRecipientQuery = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async data => await createRecipients(data),
    onSuccess: async res => {
      const postId = res.data.id;
      await queryClient.invalidateQueries(['recipient', postId]);

      return res;
    },
    onError: () => errorAlert({ title: '롤링페이퍼 대상 생성 실패' }),
  });

  return mutation;
};
