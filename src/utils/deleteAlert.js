import Swal from 'sweetalert2';

export const deleteAlert = ({
  title,
  subTitle,
  deleteMutaion,
  postId,
  onSuccess,
}) => {
  Swal.fire({
    title: title,
    text: subTitle,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '네, 삭제할래요!',
    cancelButtonText: '취소할래요!',
    width: '40rem',
  }).then(result => {
    if (result.isConfirmed) {
      deleteMutaion.mutate(postId, {
        onSuccess: () => {
          Swal.fire({
            title: '삭제 완료',
            icon: 'success',
          }).then(() => {
            onSuccess && onSuccess();
          });
        },
        onError: error => {
          alert(error);
        },
      });
    }
  });
};
