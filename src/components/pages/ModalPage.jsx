import Modal from 'components/commons/modal/Modal';
import React, { useState } from 'react';
import CardModal from 'components/commons/modal/CardModal';

const ModalPage = () => {
  const [showModal, setShowModal] = useState(true);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <div>Modal</div>
      {showModal && (
        <Modal showModal={showModal} handleClose={handleClose}>
          <CardModal />
        </Modal>
      )}
    </>
  );
};

export default ModalPage;
