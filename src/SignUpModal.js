import React, { useState } from "react";
import Modal from "react-modal";
import "./SignUpModal.css";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";
import Success from "./Success";
import Confirm from "./Confirm";
import CancelIcon from "@material-ui/icons/Cancel";

Modal.setAppElement("#root"); //This is needed so screen readers don't see main content when modal is opened.

export default function SignUpModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [occupation, setOccupation] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const values = { firstName, lastName, email, occupation, city, bio };
  const handlers = {
    setFirstName,
    setLastName,
    setEmail,
    setOccupation,
    setCity,
    setBio,
  };

  return (
    <div>
      <button
        onClick={() => setModalIsOpen(true)}
        style={{ cursor: "pointer" }}
      >
        New user? <br />
        Sign up here.
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: { backgroundColor: "rgba(255, 255, 255, 0.5)" },
          content: {
            position: "absolute",
            left: "280px",
            right: "280px",
          },
        }}
      >
        <h3 className="modal-header">
          Please enter your personal info to sign-up. <br />
          Step: {step}/2
        </h3>
        {step === 1 ? (
          <FormUserDetails
            nextStep={nextStep}
            handlers={handlers}
            values={values}
          />
        ) : step === 2 ? (
          <FormPersonalDetails
            nextStep={nextStep}
            prevStep={prevStep}
            handlers={handlers}
            values={values}
          />
        ) : step === 3 ? (
          <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />
        ) : (
          <Success firstName={firstName} />
        )}
        <div>
          <CancelIcon
            className="cancel-icon"
            onClick={() => setModalIsOpen(false)}
            className="btn"
          />
        </div>
      </Modal>
    </div>
  );
}
