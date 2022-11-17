import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteForm from './DeleteForm';

function DeleteFormModal({task}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="delete-modal-button" onClick={() => setShowModal(true)}><box-icon name='trash'></box-icon>  Delete</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteForm task={task} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default DeleteFormModal;
