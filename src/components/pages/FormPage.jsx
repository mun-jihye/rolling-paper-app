import { React } from 'react';
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
