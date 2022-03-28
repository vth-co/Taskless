import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditProjectForm from './EditProjectForm';
import "./EditProject.css"


function EditProjectFormModal({ project }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='edit-button' onClick={() => setShowModal(true)}><i className="fa-solid fa-pen"></i> Edit project</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditProjectForm project={project} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditProjectFormModal;
 