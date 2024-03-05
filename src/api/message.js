import { AUTH } from 'utils/constants/API';
import { instance } from './index';

export const getMessages = id => {
  return instance.get(`${AUTH.messages}${id}`);
};
export const putMessages = id => {
  return instance.put(`${AUTH.messages}${id}`);
};
export const updateMessages = id => {
  return instance.patch(`${AUTH.messages}${id}`);
};
/**
 * 아이디에 해당하는 메세지 카드 하나 삭제하기
 * @param {*} id
 * @returns
 */
export const deleteMessage = id => {
  return instance.delete(`${AUTH.messages}${id}/`);
};
