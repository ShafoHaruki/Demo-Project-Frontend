import React from "react";
import "./footer.css";

function Footer() {
  const text =
    "All data provided by the API is available under the Creative Commons Attribution-ShareAlike 4.0 International License.";

  return (
    <>
      <footer className="footer">
        <a href="www.google.com">Terms of Use</a>
        <a href="www.yahoo.com">Contact Me</a>
        <p>{text}</p>
      </footer>
    </>
  );
}

export default Footer;
