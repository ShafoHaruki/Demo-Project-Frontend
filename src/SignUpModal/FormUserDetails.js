import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default function FormUserDetails(props) {
  const nextPage = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  const { user, setUser } = props;

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
          onChange={(e) => setUser({...user, firstName: e.target.value})}
          defaultValue={user.firstName}
          required="required"
        />
        <br />
        <TextField
          hintText="Enter Your Last Name"
          floatingLabelText="Last Name"
          onChange={(e) => setUser({...user, lastName: e.target.value})}
          defaultValue={user.lastName}
        />
        <br />
        <TextField
          hintText="Enter Your Email"
          floatingLabelText="Email"
          onChange={(e) => setUser({...user, email: e.target.value})}
          defaultValue={user.email}
        />
        <br />
        <RaisedButton label="Continue" primary={true} onClick={nextPage} />
      </React.Fragment>
    </MuiThemeProvider>
  );
}
