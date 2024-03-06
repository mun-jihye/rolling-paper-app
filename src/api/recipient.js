import { AUTH } from 'utils/constants/API';
import { instance } from './index';

/**
 * listPage에서 전체 대상 목록 조회
 * @returns
 */
export const getRecipients = (limit = 8, offset = 0, sort) => {
  return instance.get(AUTH.recipients, {
    params: { limit, offset, sort },
  });
};
export const createRecipients = data => {
  return instance.post(AUTH.recipients, data);
};

/**
 * 롤링페이퍼 대상 조회
 * @param {*} id 대상 아이디
 * @returns
 */
export const getRecipient = id => {
  return instance.get(`${AUTH.recipients}${id}/`);
};
export const deleteRecipient = id => {
  return instance.delete(`${AUTH.recipients}${id}/`);
};

/**
 * 대상에게 보낸 메세지 목록 조회
 * @param {*} id 대상 아이디
 * @returns
 */
export const getRecipientList = id => {
  return instance.get(`${AUTH.recipients}${id}/messages/`);
};
