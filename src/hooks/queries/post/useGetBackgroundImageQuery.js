import { getBackgroundImages } from 'api/backgroundImage';
import { useQuery } from 'react-query';
import { errorAlert } from 'utils/errorAlert';

/**
 * 배경 이미지 조회 쿼리
 */
export const useGetBackgroundImageQuery = () => {
  return useQuery({
    queryKey: ['profileImage'],
    queryFn: () => getBackgroundImages(),
    onError: () => errorAlert({ title: '배경 이미지 조회 실패' }),
  });
};
