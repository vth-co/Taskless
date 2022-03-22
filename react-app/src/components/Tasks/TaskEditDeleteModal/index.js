import React, { createContext, useContext, useState } from 'react';
import { Modal } from '../../../context/Modal';
import TaskEditDelete from './TaskEditDelete';

export const EditModalContext = createContext()
export const useEditModal = () => useContext(EditModalContext)

function TaskEditDeleteModal({ project, task }) {
  const [showEditModal, setShowEditModal] = useState(false);
  console.log("this is the task", task)

  return (
    <EditModalContext.Provider
      value={{
        showEditModal,
        setShowEditModal
      }}
    >
      <button className='editDeleteImageModalButton' onClick={() => setShowEditModal(true)}>...</button>
      {showEditModal && (
        <Modal onClose={() => setShowEditModal(false)}>
          <TaskEditDelete project={project} task={task} />
        </Modal>
      )}
    </EditModalContext.Provider>
  );
}

export default TaskEditDeleteModal;
