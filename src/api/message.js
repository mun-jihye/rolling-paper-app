import { AUTH } from 'utils/constants/API';
import { instance } from './index';

/**
 * 아이디에 해당하는 메세지 조회
 * @param {Number} id recipient id
 * @returns
 */
export const getMessages = id => {
  return instance.get(`${AUTH.messages}${id}`);
};

/**
 * 아이디에 해당하는 메세지 카드 하나 삭제
 * @param {Number} id recipient id
 * @returns
 */
export const deleteMessage = id => {
  return instance.delete(`${AUTH.messages}${id}/`);
};
