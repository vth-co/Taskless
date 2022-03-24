import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditProjectForm from './EditProjectForm';
import "./EditProject.css"


function EditProjectFormModal({ project }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='edit-project-button' onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditProjectForm project={project} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditProjectFormModal;
 