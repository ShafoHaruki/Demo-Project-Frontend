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
  const { firstName, lastName, email, occupation, city, bio } = props;
  return (
    <MuiThemeProvider>
      <React.Fragment>
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
          // style={styles.button}
          onClick={nextPage}
        />
        <RaisedButton
          label="Back"
          primary={false}
          // style={styles.button}
          onClick={prevPage}
        />
      </React.Fragment>
    </MuiThemeProvider>
  );
}
