import Swal from 'sweetalert2';

export const errorAlert = ({ title }) => {
  Swal.fire({
    icon: 'error',
    title: title,
    text: '데이터 불러오는 중 에러가 발생했습니다 😥',
  });
};
