import React, { createContext, useContext, useState } from 'react';
import { Modal } from '../../../context/Modal';
import ProjectEditDelete from './ProjectEditDelete';
import "./ProjectEditDelete.css"

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
      <button className='project-edit-button' onClick={() => setShowEditModal(true)}><i className="fa-solid fa-ellipsis"></i></button>
      {showEditModal && (
        <Modal onClose={() => setShowEditModal(false)}>
          <ProjectEditDelete project={project} />
        </Modal>
      )}
    </EditModalContext.Provider>
  );
}

export default ProjectEditDeleteModal;
