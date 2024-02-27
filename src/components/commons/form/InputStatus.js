export const InputStatus = {
  inActive: {
    color: `${({ theme }) => theme.gray300}`,
    border: `1px solid ${({ theme }) => theme.gray300}`,
  },
  focused: {
    color: `${({ theme }) => theme.gray300}`,
    border: `2px solid ${({ theme }) => theme.gray500}`,
  },
  active: {
    color: `${({ theme }) => theme.gray300}`,
    border: `2px solid ${({ theme }) => theme.gray700}`,
  },
  hover: {
    color: `${({ theme }) => theme.gray300}`,
    border: `1px solid ${({ theme }) => theme.gray500}`,
  },
  disabled: {
    color: `${({ theme }) => theme.gray300}`,
    border: `1px solid ${({ theme }) => theme.gray300}`,
    backgroundColor: theme.gray100,
  },
  error: {
    color: `${({ theme }) => theme.error}`,
    border: `1px solid ${({ theme }) => theme.error}`,
  },
};
