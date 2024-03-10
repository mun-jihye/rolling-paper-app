import { getProfileImages } from 'api/profileImage';
import { useQuery } from 'react-query';
import { errorAlert } from 'utils/errorAlert';

/**
 * 프로필 이미지 조회 쿼리
 */
export const useGetProfileImagesQuery = () => {
  return useQuery({
    queryKey: ['profileImage'],
    queryFn: () => getProfileImages(),
    onError: () => errorAlert({ title: '프로필 이미지 조회 실패' }),
  });
};
