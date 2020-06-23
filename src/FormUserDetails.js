import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default function FormUserDetails(props) {
  const nextPage = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  const { firstName, lastName, email } = props.values;

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <TextField
          hintText="Enter Your First Name"
          floatingLabelText="First Name"
          onChange={(e) => props.setFirstName(e.target.value)}
          defaultValue={firstName}
        />
        <br />
        <TextField
          hintText="Enter Your Last Name"
          floatingLabelText="Last Name"
          onChange={(e) => props.setLastName(e.target.value)}
          defaultValue={lastName}
        />
        <br />
        <TextField
          hintText="Enter Your Email"
          floatingLabelText="Email"
          onChange={(e) => props.setEmail(e.target.value)}
          defaultValue={email}
        />
        <br />
        <RaisedButton label="Continue" primary={true} onClick={nextPage} />
      </React.Fragment>
    </MuiThemeProvider>
  );
}
