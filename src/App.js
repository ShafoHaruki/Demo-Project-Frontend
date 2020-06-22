import React, { useState, useEffect, useRef } from "react";
import FlashcardList from "./FlashcardList";
import "./app.css";
import axios from "axios";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  const [categories, setCategories] = useState([]);

  const categoryEl = useRef();
  const amountEl = useRef();

  useEffect(() => {
    axios
      .get("https://opentdb.com/api_category.php")
      .then((res) => setCategories(res.data.trivia_categories));
  }, []);

  useEffect(() => {
    axios.get("https://opentdb.com/api.php?amount=30").then((res) => {
      console.log(res.data);
      setFlashcards(
        res.data.results.map((questionItem, i) => {
          const answer = decodeStr(questionItem.correct_answer);
          const options = [
            ...questionItem.incorrect_answers.map((ans) => decodeStr(ans)),
            answer,
          ];
          return {
            id: `${i}-${Date.now()}`,
            question: decodeStr(questionItem.question),
            answer,
            options: options.sort(() => Math.random() - 0.5),
          };
        })
      );
    });
  }, []);

  //decode html entities in javascript
  function decodeStr(str) {
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}>
            {categories.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Number of questions</label>
          <input
            type="number"
            id="amount"
            min="1"
            step-="1"
            defaultValue={10}
            ref={amountEl}
          />
        </div>
        <div className="form-group">
          <button className="btn">Generate</button>
        </div>
      </form>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
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
