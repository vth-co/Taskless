import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditProjectForm from './EditProjectFormModal';


function EditProjectFormModal({ project }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='image-edit-button' onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditProjectForm project={project} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditProjectFormModal;
 