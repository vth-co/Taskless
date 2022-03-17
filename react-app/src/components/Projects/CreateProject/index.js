import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateProject from './CreateProjectForm';
// import './CreateProject.css'

function CreateProjectModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='createProjectModalButton' onClick={() => setShowModal(true)}><i className="+"></i></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateProject setShowModal={setShowModal} />
        </Modal>

      )}
    </>
  );
}

export default CreateProjectModal;
