import { getRecipient } from 'api/recipient';
import { useQuery } from 'react-query';
import { errorAlert } from 'utils/errorAlert';

/**
 * 롤링페이퍼 대상 조회 쿼리
 * @param {Number} postId 롤링페이퍼 대상 아이디
 * @returns
 */
export const useGetRecipientQuery = postId => {
  return useQuery({
    queryKey: ['recipient', postId],
    queryFn: () => getRecipient(postId),
    onError: () => errorAlert({ title: '롤링페이퍼 대상 조회 실패' }),
  });
};
