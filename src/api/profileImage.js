import { instance } from 'api';
import { AUTH } from 'utils/constants/API';

/**
 * 프로필이미지 조회
 */
export const getProfileImages = () => {
  return instance.get(AUTH.profileImages);
};
