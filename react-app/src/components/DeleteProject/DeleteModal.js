import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import DeleteForm from "./DeleteForm";

function DeleteFormModal({ project }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="delete-modal-button" onClick={() => setShowModal(true)}>
        <i class="bx bx-trash"></i> Delete
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
