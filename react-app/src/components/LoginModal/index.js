import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "../auth/LoginForm"

function LoginModal() {
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
          <LoginForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default LoginModal;
