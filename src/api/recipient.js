import { AUTH } from 'utils/constants/API';
import { instance } from './index';

export const getRecipients = () => {
  return instance.get(AUTH.recipients);
};
export const createRecipients = data => {
  return instance.post(AUTH.recipients, data);
};
export const getRecipient = id => {
  return instance.get(`${AUTH.recipients}${id}`);
};
export const deleteRecipients = id => {
  return instance.delete(`${AUTH.recipients}${id}`);
};

/**
 * 대상에게 보낸 메세지 목록 조회
 * @param {*} id 대상 아이디
 * @returns
 */
export const getRecipientList = id => {
  return instance.get(`${AUTH.recipients}${id}/messages/`);
};
