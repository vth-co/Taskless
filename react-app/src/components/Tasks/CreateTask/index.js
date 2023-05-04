import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import CreateTaskForm from "./CreateTaskForm";
import "./CreateTask.css";

function CreateTaskModal({ project }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="task-button-container">
        <svg
          className="add-task"
          onClick={() => setShowModal(true)}
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none" fillRule="evenodd" transform="translate(4 3)">
            <mask id="jd4FBg" fill="#fff">
              <path d="M9 8h7a.5.5 0 1 1 0 1H9v7a.5.5 0 1 1-1 0V9H1a.5.5 0 0 1 0-1h7V1a.5.5 0 0 1 1 0v7z"></path>
            </mask>
            <g mask="url(#jd4FBg)">
              <path fill="currentColor" d="M-4-3h24v24H-4z"></path>
            </g>
          </g>
        </svg>
        <span className="tooltip-task">Add task</span>
      </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateTaskForm project={project} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default CreateTaskModal;
