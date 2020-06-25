import React, { useState } from "react";
import Modal from "react-modal";
import "./SignUpModal.css";
import FormPersonalDetails from "./FormPersonalDetails";
import FormUserDetails from "./FormUserDetails";
import Success from "./Success";
import Confirm from "./Confirm";
import CancelIcon from "@material-ui/icons/Cancel";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

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
  // const [code, setCode] = useState({ codeOne: "", codeTwo: "" });

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const values = {
    firstName,
    lastName,
    email,
    occupation,
    city,
    bio,
    // code,
  };
  const handlers = {
    setFirstName,
    setLastName,
    setEmail,
    setOccupation,
    setCity,
    setBio,
    // setCode,
  };

  return (
    <div>
      <button
        onClick={() => setModalIsOpen(true)}
        style={{ cursor: "pointer" }}
      >
        <AccountCircleIcon />
        <br />
        New? Click here to sign up
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: { backgroundColor: "rgba(255, 255, 255, 0.5)" },
          content: {
            position: "absolute",
            minHeight: "400px",
            maxWidth: "40vw",
            top: "25vh",
            left: "25vw",
            bottom: "30%",
          },
        }}
      >
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
          />
        </div>
      </Modal>
    </div>
  );
}
