import { React } from 'react';
import PrimaryBtn from 'components/commons/buttons/PrimaryBtn';
import SecondaryBtn from 'components/commons/buttons/SecondaryBtn';
import ToggleBtn from 'components/commons/buttons/ToggleBtn';
import OutlinedBtn from 'components/commons/buttons/OutlinedBtn';
import { ArrowBtnL, ArrowBtnR } from 'components/commons/buttons/ArrowBtns';
import PlusBtn from 'components/commons/buttons/PlusBtn';
import DeleteBtn from 'components/commons/buttons/DeleteBtn';

const ButtonPage = () => {
  return (
    <div>
      <PrimaryBtn>PrimaryBtn</PrimaryBtn>
      <SecondaryBtn>Secondary</SecondaryBtn>
      <ToggleBtn />
      <OutlinedBtn>Outline</OutlinedBtn>
      <ArrowBtnL />
      <ArrowBtnR />
      <PlusBtn />
      <DeleteBtn />
    </div>
  );
};

export default ButtonPage;
