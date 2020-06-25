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
  const { occupation, city, bio, code } = props.values;
  const { setOccupation, setCity, setBio, setCode } = props.handlers;

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
          onChange={(e) => setOccupation(e.target.value)}
          defaultValue={occupation}
        />
        <br />
        <TextField
          hintText="Enter Your City"
          floatingLabelText="City"
          onChange={(e) => setCity(e.target.value)}
          defaultValue={city}
        />
        <br />
        <TextField
          hintText="Enter Your Bio"
          floatingLabelText="Bio"
          onChange={(e) => setBio(e.target.value)}
          defaultValue={bio}
        />
        <br />
        {/* <TextField
          hintText="Enter your code two"
          floatingLabelText="Code two"
          onChange={(e) =>
            setCode((prevState) => ({
              ...prevState,
              codeTwo: e.target.value,
            }))
          }
          defaultValue={code.codeTwo}
        />
        <br /> */}
        <RaisedButton label="Continue" primary={true} onClick={nextPage} />
        <RaisedButton label="Back" primary={false} onClick={prevPage} />
      </React.Fragment>
    </MuiThemeProvider>
  );
}
