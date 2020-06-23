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
  const { occupation, city, bio } = props.values;

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <TextField
          hintText="Enter Your Occupation"
          floatingLabelText="Occupation"
          onChange={(e) => props.setOccupation(e.target.value)}
          defaultValue={occupation}
        />
        <br />
        <TextField
          hintText="Enter Your City"
          floatingLabelText="City"
          onChange={(e) => props.setCity(e.target.value)}
          defaultValue={city}
        />
        <br />
        <TextField
          hintText="Enter Your Bio"
          floatingLabelText="Bio"
          onChange={(e) => props.setBio(e.target.value)}
          defaultValue={bio}
        />
        <br />
        <RaisedButton label="Continue" primary={true} onClick={nextPage} />
        <RaisedButton label="Back" primary={false} onClick={prevPage} />
      </React.Fragment>
    </MuiThemeProvider>
  );
}
