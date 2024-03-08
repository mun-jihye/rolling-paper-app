import { getRecipientList } from 'api/recipient';
import { useInfiniteQuery } from 'react-query';
import { errorAlert } from 'utils/errorAlert';

/**
 * 메세지 조회 쿼리
 * @param {Number} postId 롤링페이퍼 대상 id
 * @param {Number} limit 서버에서 불러올 메세지 개수
 * @returns
 */
export const useGetMessagesQuery = (postId, limit = 5) => {
  return useInfiniteQuery({
    queryKey: ['messages', postId],
    queryFn: async ({ pageParam = 0 }) => {
      return await getRecipientList(postId, limit, { offset: pageParam });
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length * limit;

      if (lastPage?.data.next === null) {
        return undefined;
      }

      if (lastPage?.data.count <= nextPage) {
        return undefined;
      }

      return nextPage;
    },
    retry: false,
    onError: () => errorAlert({ title: '롤링페이퍼 메세지 조회 실패' }),
  });
};
