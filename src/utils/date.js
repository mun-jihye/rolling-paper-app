/**
 * 날짜를 포멧팅하는 함수
 *
 * @param {string} dateString
 * @returns {string} 형식화된 날짜
 */
export function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear().toString().padStart(4, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}.${month}.${day}`;
}
