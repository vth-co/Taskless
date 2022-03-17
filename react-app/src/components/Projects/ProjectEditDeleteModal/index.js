import React, { createContext, useContext, useState } from 'react';
import { Modal } from '../../context/Modal';
import EditDeleteComment from './EditDeleteComment';

export const EditModalContext = createContext()
export const useEditModal = () => useContext(EditModalContext)

function ProjectEditDeleteModal({ project }) {
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <EditModalContext.Provider
      value={{
        showEditModal,
        setShowEditModal
      }}
    >
      <button className='' onClick={() => setShowEditModal(true)}>...</button>
      {showEditModal && (
        <Modal onClose={() => setShowEditModal(false)}>
          <EditDeleteComment comment={comment} />
        </Modal>
      )}
    </EditModalContext.Provider>
  );
}

export default ProjectEditDeleteModal;
