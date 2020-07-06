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
  const { name, country, bio, email } = props.user;
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <h3 className="modal-header">
          Please check that your inputted information are correct. You may press
          back to ammend.
        </h3>
        <List>
          <ListItem primaryText="Name" secondaryText={name} />
          <ListItem primaryText="Country" secondaryText={country} />
          <ListItem primaryText="Bio" secondaryText={bio} />
          <ListItem primaryText="Email" secondaryText={email} />
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
