import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default function FormPersonalDetails(props) {
  const nextPage = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  const prevPage = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const { user, setUser } = props

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <h3 className="modal-header">
          Please enter your personal info to sign-up. <br />
          Step: 2/2
        </h3>
        <TextField
          hintText="Enter Your Occupation"
          floatingLabelText="Occupation"
          onChange={(e) => setUser({...user, occupation: e.target.value})}
          defaultValue={user.occupation}
        />
        <br />
        <TextField
          hintText="Enter Your City"
          floatingLabelText="City"
          onChange={(e) => setUser({...user, city: e.target.value})}
          defaultValue={user.city}
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
        <RaisedButton label="Back" primary={false} onClick={prevPage} />
      </React.Fragment>
    </MuiThemeProvider>
  );
}
