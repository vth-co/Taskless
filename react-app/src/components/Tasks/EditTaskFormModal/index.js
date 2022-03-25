import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditTaskForm from './EditTaskForm';
import "./EditTask.css"


function EditTaskFormModal({ project, task }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='edit-button' onClick={() => setShowModal(true)}><i class="fa-solid fa-pen"></i> Edit task</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditTaskForm project={project} task={task} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditTaskFormModal;
 