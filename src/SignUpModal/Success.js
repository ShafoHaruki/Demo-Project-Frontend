import React from "react";

export default function Success({ user }) {
  return (
    <div>
      <h1>Congratulations {user.name}, sign-up is successful!</h1>
    </div>
  );
}
