import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import TaskDetail from './TaskDetail';
import "./TaskDetail.css"


function TaskDetailModal({ project, task }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='task-detail' onClick={() => setShowModal(true)}>{task.title}</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <TaskDetail project={project} task={task} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default TaskDetailModal;
 