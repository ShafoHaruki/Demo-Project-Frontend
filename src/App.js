import React, { useState } from "react";
import FlashcardList from "./FlashcardList";
import "./app.css";

function App() {
  //eslint-disable-next-line
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  return (
    <div className="App">
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is 2 + 2 ?",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 2,
    question: "What is 24 + 32 ?",
    answer: "56",
    options: ["62", "43", "47", "56"],
  },
  {
    id: 3,
    question: "What is 33 + 99 ?",
    answer: "132",
    options: ["113", "132", "143", "122"],
  },
];

export default App;
