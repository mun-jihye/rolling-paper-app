import React from 'react';
import Profile from '../Profile';
import profile from 'components/assets/images/profiles/profile1.png';

const CardModal = () => {
  return (
    <>
      <div>card modal</div>
      <Profile src={profile} isModal={true} />
    </>
  );
};

export default CardModal;
