import React, { createContext, useContext, useState } from 'react';
import { Modal } from '../../../context/Modal';
import TaskEditDelete from './TaskEditDelete';
import "./TaskEditDelete.css"

export const EditModalContext = createContext()
export const useEditModal = () => useContext(EditModalContext)

function TaskEditDeleteModal({ project, task }) {
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <EditModalContext.Provider
      value={{
        showEditModal,
        setShowEditModal
      }}
    >
      <button className='task-edit-delete-button' onClick={() => setShowEditModal(true)}><i class="fa-solid fa-ellipsis"></i></button>
      {showEditModal && (
        <Modal onClose={() => setShowEditModal(false)}>
          <TaskEditDelete project={project} task={task} />
        </Modal>
      )}
    </EditModalContext.Provider>
  );
}

export default TaskEditDeleteModal;
