import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditTaskForm from './EditTaskForm';
import "./EditTask.css"


function EditTaskFormModal({ project, task }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='edit-task-button' onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditTaskForm project={project} task={task} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditTaskFormModal;
 