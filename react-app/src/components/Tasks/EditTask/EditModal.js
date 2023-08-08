import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import EditTaskForm from "./EditForm";
import "./EditTask.css";

function EditTaskFormModal({ project, task }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="edit-button" onClick={() => setShowModal(true)}>
        <i className="fa-regular fa-pen-to-square"></i> Edit task
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditTaskForm
            project={project}
            task={task}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </>
  );
}

export default EditTaskFormModal;
