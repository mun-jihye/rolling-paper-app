import Swal from 'sweetalert2';

export const infoAlert = ({ title }) => {
  Swal.fire({
    icon: 'success',
    title: title,
    showConfirmButton: false,
    timer: 1500,
  });
};
