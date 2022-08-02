import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateProjectForm from './CreateProjectForm';
import './CreateProject.css'

function CreateProjectModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='add-tasklist-button' onClick={() => setShowModal(true)}>+ Add Tasklist</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateProjectForm setShowModal={setShowModal} />
        </Modal>

      )}
    </>
  );
}

export default CreateProjectModal;
