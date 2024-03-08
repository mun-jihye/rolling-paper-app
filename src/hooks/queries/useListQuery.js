import { getRecipients } from 'api/recipient';
import { useQuery } from 'react-query';

/**
 * 롤링 페이어 목록을 정렬하여 가져오기 위한 useQuery hook
 * @param {string} sort 정렬 기준, 값이 없으면 최신순, 'like' 인 경우 인기순
 * @returns
 */
export const useGetRecipientsInOrderQuery = sort => {
  return useQuery({
    queryKey: ['recipients', 'list', { sort }],
    queryFn: () => getRecipients({ sort: sort === 'date' ? '' : sort }),
  });
};
