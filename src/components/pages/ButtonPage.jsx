import { React } from 'react';
import { PrimaryBtn } from 'components/commons/buttons/PrimaryBtn';
import { Secondary } from 'components/commons/buttons/SecondaryBtn';
import ToggleBtn from 'components/commons/buttons/ToggleBtn';
import { OutlineBtn } from 'components/commons/buttons/OutlinedBtn';
import { ArrowBtnL, ArrowBtnR } from 'components/commons/buttons/ArrowBtn';
import PlusBtn from 'components/commons/buttons/PlusBtn';

const buttonPage = () => {
  return (
    <div>
      <PrimaryBtn>PrimaryBtn</PrimaryBtn>
      <Secondary>Secondary</Secondary>
      <ToggleBtn />
      <OutlineBtn>Outline</OutlineBtn>
      <ArrowBtnL />
      <ArrowBtnR />
      <PlusBtn />
    </div>
  );
};

export default buttonPage;
