import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default function FormUserDetails(props) {
  const nextPage = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  const { firstName, lastName, email, code } = props.values;
  const { setFirstName, setLastName, setEmail, setCode } = props.handlers;

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <h3 className="modal-header">
          Please enter your personal info to sign-up. <br />
          Step: 1/2
        </h3>
        <TextField
          hintText="Enter Your First Name"
          floatingLabelText="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          defaultValue={firstName}
          required="required"
        />
        <br />
        <TextField
          hintText="Enter Your Last Name"
          floatingLabelText="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          defaultValue={lastName}
        />
        <br />
        <TextField
          hintText="Enter Your Email"
          floatingLabelText="Email"
          onChange={(e) => setEmail(e.target.value)}
          defaultValue={email}
        />
        <br />
        {/* <TextField
          hintText="Enter your code one"
          floatingLabelText="Code one"
          onChange={(e) =>
            setCode((prevState) => ({
              ...prevState,
              codeOne: e.target.value,
            }))
          }
          defaultValue={code.codeOne}
        />
        <br /> */}
        <RaisedButton label="Continue" primary={true} onClick={nextPage} />
      </React.Fragment>
    </MuiThemeProvider>
  );
}
