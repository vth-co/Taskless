import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateTaskForm from './CreateTaskForm';
// import './CreateTask.css'

function CreateTaskModal({project}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='createTaskModalButton' onClick={() => setShowModal(true)}><i className="+"></i></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateTaskForm project={project} setShowModal={setShowModal} />
        </Modal>

      )}
    </>
  );
}

export default CreateTaskModal;
