import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditTaskForm from './EditTaskForm';


function EditTaskFormModal({ project, task }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='' onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditTaskForm project={project} task={task} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditTaskFormModal;
 