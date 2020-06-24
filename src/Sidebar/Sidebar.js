import React from "react";
import "./sidebar.css";

function Sidebar(props) {
  return (
    <>
      <aside>
        <div className="font-select-container">
          <p className="fontSelectHeader">Choose your fonts!</p>
          <hr />
          <button
            className="fontSelectButton"
            onClick={() => {
              props.onFontSelect("");
            }}
          >
            Default Font
          </button>
          <button
            className="fontSelectButton"
            onClick={() => {
              props.onFontSelect("nunito");
            }}
          >
            Nunito Font
          </button>
          <button
            className="fontSelectButton"
            onClick={() => {
              props.onFontSelect("titillium");
            }}
          >
            Titillium Font
          </button>
          <button
            className="fontSelectButton"
            onClick={() => {
              props.onFontSelect("inconsolata");
            }}
          >
            Inconsolata Font
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
