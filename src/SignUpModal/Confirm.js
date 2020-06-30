import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export default function Confirm(props) {
  const nextPage = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  const prevPage = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const { firstName, lastName, email, occupation, city, bio } = props.user;
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <h3 className="modal-header">
          Please check that your inputted information are correct. You may press
          back to ammend.
        </h3>
        <List>
          <ListItem primaryText="First Name" secondaryText={firstName} />
          <ListItem primaryText="Last Name" secondaryText={lastName} />
          <ListItem primaryText="Email" secondaryText={email} />
          <ListItem primaryText="Occupation" secondaryText={occupation} />
          <ListItem primaryText="City" secondaryText={city} />
          <ListItem primaryText="Bio" secondaryText={bio} />
        </List>
        <br />
        <RaisedButton
          label="Confirm & Continue"
          primary={true}
          onClick={nextPage}
        />
        <RaisedButton label="Back" primary={false} onClick={prevPage} />
      </React.Fragment>
    </MuiThemeProvider>
  );
}
