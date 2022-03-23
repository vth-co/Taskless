import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import LoginForm from "./LoginForm"
import "../auth.css"

function LoginModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="login-signup-button"
        onClick={() => setShowModal(true)}
      >Log in
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
