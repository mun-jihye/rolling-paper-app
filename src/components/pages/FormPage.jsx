import { React } from 'react';
import { useTheme } from 'styled-components';

import {
  TextFieldInput,
  TextFieldDropDown,
  TextFieldTextEditor,
} from 'components/commons/form';

const FormPage = () => {
  return (
    <div>
      <TextFieldInput />
      <TextFieldDropDown />
      <TextFieldTextEditor />
    </div>
  );
};

export default FormPage;
