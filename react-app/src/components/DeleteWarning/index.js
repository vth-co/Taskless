import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteWarning from './DeleteWarning';

function DeleteWarningModal({task}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='' onClick={() => setShowModal(true)}><i class="fa-regular fa-square"></i></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteWarning task={task} setShowModal={setShowModal} />
        </Modal>

      )}
    </>
  );
}

export default DeleteWarningModal;
