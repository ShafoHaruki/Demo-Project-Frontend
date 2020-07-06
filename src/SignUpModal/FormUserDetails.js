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
          hintText="Enter Your Name"
          floatingLabelText="Name"
          onChange={(e) => setUser({...user, name: e.target.value})}
          defaultValue={user.name}
          required="required"
        />
        <br />
        <TextField
          hintText="Enter Your Country"
          floatingLabelText="Country"
          onChange={(e) => setUser({...user, country: e.target.value})}
          defaultValue={user.country}
        />
        <br />
        <TextField
          hintText="Enter Your Bio"
          floatingLabelText="Bio"
          onChange={(e) => setUser({...user, bio: e.target.value})}
          defaultValue={user.bio}
        />
        <br />
        <RaisedButton label="Continue" primary={true} onClick={nextPage} />
      </React.Fragment>
    </MuiThemeProvider>
  );
}
