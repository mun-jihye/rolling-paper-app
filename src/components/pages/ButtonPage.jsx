import { React } from 'react';
import { PrimaryBtn } from 'components/commons/buttons/PrimaryBtn';
import { Secondary } from 'components/commons/buttons/SecondaryBtn';
import ToggleBtn from 'components/commons/buttons/ToggleBtn';
import { OutlineBtn } from 'components/commons/buttons/OutlinedBtn';
// import { PrimaryButton } from 'components/commons/buttons/ButtonStyle';
// import { theme } from 'components/styles/theme';

const buttonPage = () => {
  // const [status, setStatus] = useState(PrimaryButton.enabled);
  return (
    <div>
      <PrimaryBtn
        width="12rem"
        height="4rem"
        borderRadius="0.6rem"
        fonSize="1.4rem"
        fontWeight="400"
      />
      <Secondary />
      <ToggleBtn />
      <OutlineBtn />
    </div>
  );
};

export default buttonPage;
