import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateProjectForm from './CreateProjectForm';
// import './CreateProject.css'

function CreateProjectModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='createProjectModalButton' onClick={() => setShowModal(true)}><i class="fa-solid fa-plus"></i></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateProjectForm setShowModal={setShowModal} />
        </Modal>

      )}
    </>
  );
}

export default CreateProjectModal;
