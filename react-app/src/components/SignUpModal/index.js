import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignUpForm from "../auth/SignUpForm"

function SignUpModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="createProjectModalButton"
        onClick={() => setShowModal(true)}
      >
        <i className="+"></i>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default SignUpModal;
