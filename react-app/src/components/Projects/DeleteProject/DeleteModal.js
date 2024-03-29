import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import DeleteForm from "./DeleteForm";

function DeleteFormModal({ project }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="delete-modal-button"
        onClick={() => setShowModal(true)}
      >
        <i className="fa-regular fa-trash-can"></i> Delete
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteForm project={project} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default DeleteFormModal;
