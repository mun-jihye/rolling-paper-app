import { getRecipients } from 'api/recipient';
import { useInfiniteQuery } from 'react-query';
import { errorAlert } from 'utils/errorAlert';

/**
 * 롤링 페이퍼 목록을 page 로 구분해 가져오기 위한 useInfiniteQuery hook
 * @param {integer} limit page 당 들어가는 롤링 페이퍼의 개수
 * @param {string} sort 정렬 기준, 값이 없으면 최신순, 'like' 인 경우 인기순
 * @returns
 */
export const useGetRecipientsAllQuery = (limit = 8, sort) => {
  return useInfiniteQuery({
    queryKey: ['recipients', { sort }],

    queryFn: ({ pageParam = 0 }) => {
      return getRecipients({
        limit,
        offset: pageParam,
        sort: sort === 'date' ? '' : sort,
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

    onError: () => errorAlert({ title: '롤링 페이퍼 목록 불러오기 실패' }),

    retry: false,
  });
};
