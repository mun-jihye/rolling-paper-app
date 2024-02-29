import { theme } from 'styles/theme';
export const InputStatus = {
  inActive: {
    color: `${theme.gray500}`,
    border: `1px solid ${theme.gray300}`,
    backgroundColor: `#fff`,
  },
  focused: {
    color: `${theme.gray900}`,
    border: `2px solid ${theme.gray500}`,
    backgroundColor: `#fff`,
  },
  active: {
    color: `${theme.gray900}`,
    border: `2px solid ${theme.gray700}`,
    backgroundColor: `#fff`,
  },
  hover: {
    color: `${theme.gray500}`,
    border: `1px solid ${theme.gray500}`,
    backgroundColor: `#fff`,
  },
  disabled: {
    color: `${theme.gray400}`,
    border: `1px solid ${theme.gray300}`,
    backgroundColor: `${theme.gray100}`,
  },
  error: {
    color: `${theme.error}`,
    border: `1px solid ${theme.error}`,
    backgroundColor: `${theme.gray100}`,
  },
};
