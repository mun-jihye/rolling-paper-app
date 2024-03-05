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
export const deleteMessages = id => {
  return instance.delete(`${AUTH.messages}${id}`);
};
