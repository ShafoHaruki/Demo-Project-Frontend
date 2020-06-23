import React, { useState } from "react";
import Modal from "react-modal";
import "./SignInModal.css";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";
import Success from "./Success";
import Confirm from "./Confirm";

Modal.setAppElement("#root"); //This is needed so screen readers don't see main content when modal is opened.

export default function SignInModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [step, setStep] = useState(1);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Sign-in</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: { backgroundColor: "rgba(255, 255, 255, 0.5)" },
          content: { color: "red" },
        }}
      >
        {step === 1 ? (
          <FormPersonalDetails />
        ) : step === 2 ? (
          <FormUserDetails />
        ) : step === 3 ? (
          <Success />
        ) : (
          <Confirm />
        )}
        <div>
          <button onClick={() => setModalIsOpen(false)}>X</button>
          <button onClick={() => setStep(step + 1)}>Next page</button>
        </div>
      </Modal>
    </div>
  );
}
