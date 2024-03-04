import { AUTH } from 'utils/constants/API';
import { instance } from './index';

export const getRecipients = (limit = 8, offset = 0, sort) => {
  return instance.get(AUTH.recipients, {
    params: { limit, offset, sort },
  });
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
