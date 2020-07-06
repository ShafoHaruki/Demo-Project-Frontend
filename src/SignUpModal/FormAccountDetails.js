import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default function FormAccountDetails(props) {
  const nextPage = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  const prevPage = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const { user, setUser } = props;

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <h3 className="modal-header">
          Please enter your personal info to sign-up. <br />
          Step: 2/2
        </h3>
        <TextField
          hintText="Enter Your Email"
          floatingLabelText="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          defaultValue={user.email}
        />
        <br />
        <TextField
          hintText="Consider A Strong Password"
          floatingLabelText="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          defaultValue={user.password}
        />
        <br />
        <TextField
          hintText="Make Sure They Are The Same"
          floatingLabelText="Re-Enter Password"
          onChange={(e) =>
            setUser({ ...user, reEnterPassword: e.target.value })
          }
          defaultValue={user.reEnterPassword}
        />
        <br />
        <RaisedButton label="Continue" primary={true} onClick={nextPage} />
        <RaisedButton label="Back" primary={false} onClick={prevPage} />
      </React.Fragment>
    </MuiThemeProvider>
  );
}
