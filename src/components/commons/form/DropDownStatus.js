import { theme } from 'components/styles/theme';
export const DropDownStatus = {
  inActive: {
    color: `${theme.gray300}`,
    border: `1px solid ${theme.gray300}`,
    backgroundColor: `#fff`,
  },
  focused: {
    color: `${theme.gray300}`,
    border: `2px solid ${theme.gray500}`,
    backgroundColor: `#fff`,
  },
  active: {
    color: `${theme.gray300}`,
    border: `2px solid ${theme.gray700}`,
    backgroundColor: `#fff`,
  },
  hover: {
    color: `${theme.gray300}`,
    border: `1px solid ${theme.gray500}`,
    backgroundColor: `#fff`,
  },
  disabled: {
    color: `${theme.gray400}`,
    border: `1px solid ${theme.gray300}`,
    backgroundColor: `${theme.gray100}`,
  },
  error: {
    color: `${theme.gray900}`,
    border: `1px solid ${theme.error}`,
    backgroundColor: `#fff`,
  },
};
