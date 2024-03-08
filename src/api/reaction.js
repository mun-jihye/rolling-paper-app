import { instance } from 'api';
import { AUTH } from 'utils/constants/API';

/**
 * 이모지 조회 요청
 * @param {Number} id recipient id
 * @returns
 */
export const getReactions = id => {
  return instance.get(`${AUTH.recipients}${id}/reactions/`);
};

/**
 * 이모지 업데이트 요청
 * @param {Number} id recipient id
 * @param {Object} data 요청시 함께 보낼 데이터
 * @returns
 */
export const postReactions = (id, data) => {
  return instance.post(`${AUTH.recipients}${id}/reactions/`, data);
};
