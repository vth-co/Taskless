import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import TaskDetail from './TaskDetail';


function TaskDetailModal({ project, task }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='' onClick={() => setShowModal(true)}>{task.title}</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <TaskDetail project={project} task={task} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default TaskDetailModal;
 