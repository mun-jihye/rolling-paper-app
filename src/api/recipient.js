import { AUTH } from 'utils/constants/API';
import { instance } from './index';

/**
 * listPage에서 전체 대상 목록 조회
 * @param {Object} queryObj
 * @param {number} [queryObj.limit=8] 가져올 데이터 개수
 * @param {number} [queryObj.offset=0] 건너뛸 데이터 개수
 * @param {string} [queryObj.sort] 정렬 기준, 값이 없으면 최신순, 'like' 인 경우 인기순
 * @returns
 */
export const getRecipients = queryObj => {
  return instance.get(AUTH.recipients, {
    params: { ...queryObj },
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
export const getRecipientList = (id, limit, { offset }) => {
  return instance.get(`${AUTH.recipients}${id}/messages/`, {
    params: {
      limit: limit,
      offset: offset,
    },
  });
};
