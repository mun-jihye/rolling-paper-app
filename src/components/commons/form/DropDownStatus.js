export const DropDownStatus = (theme = '') => {
  return {
    inActive: {
      color: `${({ theme }) => theme.gray300}`,
      border: `1px solid ${({ theme }) => theme.gray300}`,
      backgroundColor: `${theme.gray100}`,
    },
    focused: {
      color: `${({ theme }) => theme.gray300}`,
      border: `2px solid ${({ theme }) => theme.gray500}`,
      backgroundColor: `${theme.gray100}`,
    },
    active: {
      color: `${({ theme }) => theme.gray300}`,
      border: `2px solid ${({ theme }) => theme.gray700}`,
      backgroundColor: `${theme.gray100}`,
    },
    hover: {
      color: `${({ theme }) => theme.gray300}`,
      border: `1px solid ${({ theme }) => theme.gray500}`,
      backgroundColor: `${theme.gray100}`,
    },
    disabled: {
      color: `${({ theme }) => theme.gray300}`,
      border: `1px solid ${({ theme }) => theme.gray300}`,
      backgroundColor: `${theme.gray100}`,
    },
    error: {
      color: `${({ theme }) => theme.gray300}`,
      border: `1px solid ${({ theme }) => theme.error}`,
      backgroundColor: `${theme.gray100}`,
    },
  };
};
