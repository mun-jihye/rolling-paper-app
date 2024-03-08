import { getRecipient } from 'api/recipient';
import { useQuery } from 'react-query';
import { errorAlert } from 'utils/errorAlert';

export const useGetRecipientQuery = postId => {
  return useQuery({
    queryKey: ['recipient', postId],
    queryFn: () => getRecipient(postId),
    onError: () => errorAlert({ title: '롤링페이퍼 대상 조회 실패' }),
  });
};
