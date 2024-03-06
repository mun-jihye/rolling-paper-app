import { instance } from 'api';
import { AUTH } from 'utils/constants/API';

export const getReactions = id => {
  return instance.get(`${AUTH.recipients}${id}/reactions/`);
};
