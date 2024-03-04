import { AUTH } from 'utils/constants/API';
import { instance } from './index';

export const getRecipients = () => {
  return instance.get(AUTH.recipients);
};
export const createRecipients = data => {
  return instance.post(AUTH.recipients, data);
};
export const getRecipient = id => {
  return instance.get(`${AUTH.recipients}/${id}`);
};
export const deleteRecipients = id => {
  return instance.delete(`${AUTH.recipients}/${id}`);
};
