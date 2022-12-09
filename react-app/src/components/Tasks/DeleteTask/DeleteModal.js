import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import DeleteForm from "./DeleteForm";

function DeleteFormModal({ task }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="delete-modal-button"
        onClick={() => setShowModal(true)}
      >
        <i class="fa-regular fa-trash-can"></i> Delete
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteForm task={task} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default DeleteFormModal;
