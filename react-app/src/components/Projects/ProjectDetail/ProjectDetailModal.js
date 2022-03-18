import React, { createContext, useContext, useState } from "react";
import { Modal } from "../../../context/Modal";
import ProjectDetail from ".";

export const ProjectDetailModalContext = createContext();
export const useProjectDetailModal = () => useContext(ProjectDetailModalContext);

function ProjectDetailModal({ project }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <ProjectDetailModalContext.Provider
      value={{
        showModal,
        setShowModal,
      }}
    >
      <div>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <ProjectDetail project={project} />
          </Modal>
        )}
      </div>
    </ProjectDetailModalContext.Provider>
  );
}

export default ProjectDetailModal;
