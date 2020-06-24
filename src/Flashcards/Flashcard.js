import React, { useState, useRef } from "react";
import "./flashcard.css";

export default function Flashcard({ flashcard, font }) {
  const [flip, setFlip] = useState(false);

  const frontEl = useRef();
  const backEl = useRef();

  return (
    <div
      className={`card ${flip ? "flip" : ""} ${font}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front" ref={frontEl}>
        {flashcard.question}
        <div className="flashcard-options">
          {flashcard.options.map((option) => {
            return (
              <div className="flashcard-option" key={option}>
                {option}
              </div>
            );
          })}
        </div>
      </div>

      <div className="back" ref={backEl}>
        {flashcard.answer}
      </div>
    </div>
  );
}
