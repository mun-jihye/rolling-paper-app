import { getRecipients } from 'api/recipient';
import { useInfiniteQuery } from 'react-query';

export const useGetRecipientsAllQuery = (limit = 8, sort) => {
  return useInfiniteQuery({
    queryKey: ['recipients', 'all', { sort }],

    queryFn: ({ pageParam = 0 }) => {
      return getRecipients({
        limit,
        offset: pageParam,
        sort: sort === 'date' ? '' : 'like',
      });
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
  });
};
