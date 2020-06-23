import React, { useState } from "react";
import Modal from "react-modal";

export default function SignInModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Sign-in</button>
      <Modal isOpen={modalIsOpen}>
        <h2>Modal title</h2>
        <p>Modal body</p>
      </Modal>
    </div>
  );
}
