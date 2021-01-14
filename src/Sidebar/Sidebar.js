import React from "react";
import SignUpModal from "../SignUpModal/SignUpModal";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "./sidebar.css";
import { Switch } from "antd";

function Sidebar({ onFontSelect, onToggleClick }) {
  return (
    <Router>
      <aside>
        <SignUpModal />
        <hr />
        <nav>
          <ul className="nav-links">
            <Link to="/">
              <button>Main Page</button>
            </Link>
            <Link to="/UserDeck">
              <button>Your Deck</button>
            </Link>
            <Link to="/AboutApp">
              <button>About App</button>
            </Link>
          </ul>
        </nav>
        <hr />
        <div className="font-select-container">
          <p className="fontSelectHeader">Choose your fonts!</p>
          <button
            className="fontSelectButton"
            onClick={() => {
              onFontSelect("");
            }}
          >
            Default Font
          </button>
          <button
            className="fontSelectButton"
            onClick={() => {
              onFontSelect("nunito");
            }}
          >
            Nunito Font
          </button>
          <button
            className="fontSelectButton"
            onClick={() => {
              onFontSelect("titillium");
            }}
          >
            Titillium Font
          </button>
          <button
            className="fontSelectButton"
            onClick={() => {
              onFontSelect("inconsolata");
            }}
          >
            Inconsolata Font
          </button>
        </div>
        <hr />

        <p>This is the theme select</p>
        <Switch onClick={() => onToggleClick()} />
      </aside>
    </Router>
  );
}

export default Sidebar;
