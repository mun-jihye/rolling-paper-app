import { instance } from 'api';
import { AUTH } from 'utils/constants/API';

/**
 * 배경 이미지 조회
 */
export const getBackgroundImages = () => {
  return instance.get(AUTH.backgroundImages);
};
