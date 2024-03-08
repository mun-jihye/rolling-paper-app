import { getRecipientList } from 'api/recipient';
import { useInfiniteQuery } from 'react-query';
import { errorAlert } from 'utils/errorAlert';

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
