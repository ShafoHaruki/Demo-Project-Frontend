import React, { useState } from "react";
import Modal from "react-modal";
import "./SignUpModal.css";
import FormAccountDetails from "./FormAccountDetails"
import FormUserDetails from "./FormUserDetails";
import Success from "./Success";
import Confirm from "./Confirm";
import CancelIcon from "@material-ui/icons/Cancel";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import axios from "axios";

Modal.setAppElement("#root"); //This is needed so screen readers don't see main content when modal is opened.

export default function SignUpModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({name:"", country:"", bio:"", email:"", password:"", reEnterPassword:"",})

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
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
            user={user}
            setUser={setUser}
          />
        ) : step === 2 ? (
          <FormAccountDetails
            nextStep={nextStep}
            prevStep={prevStep}
            user={user}
            setUser={setUser}
          />
        ) : step === 3 ? (
          <Confirm nextStep={nextStep} prevStep={prevStep} user={user} />
        ) : (
          <Success user={user} />
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
