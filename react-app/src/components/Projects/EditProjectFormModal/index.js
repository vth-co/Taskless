import React, { useState } from 'react';
import { Modal } from '../../context/Modal';


function EditProjectFormModal({ project }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='image-edit-button' onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditImageForm image={image} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditProjectFormModal;
 