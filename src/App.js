import React, { useState, useEffect, useRef } from "react";
import FlashcardList from "./Flashcards/FlashcardList";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import "./app.css";
import axios from "axios";
import ViewAgendaIcon from "@material-ui/icons/ViewAgenda";

const he = require("he");

export default function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [categories, setCategories] = useState([]);

  const [font, setFont] = useState("");
  function handleFontName(font) {
    setFont(font);
  }

  const categoryEl = useRef();
  const amountEl = useRef();

  useEffect(() => {
    axios.get("https://opentdb.com/api_category.php").then((res) => {
      setCategories(res.data.trivia_categories);
    });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get("https://opentdb.com/api.php", {
        params: {
          amount: amountEl.current.value,
          category: categoryEl.current.value,
        },
      })
      .then((res) => {
        setFlashcards(
          res.data.results.map((questionItem, index) => {
            const answer = he.decode(questionItem.correct_answer);
            const options = [
              ...questionItem.incorrect_answers.map((a) => he.decode(a)),
              answer,
            ];
            return {
              id: `${index}-${Date.now()}`,
              question: he.decode(questionItem.question),
              answer: answer,
              options: options.sort(() => Math.random() - 0.5),
            };
          })
        );
      });
  }

  return (
    <>
      <form className="header" onSubmit={handleSubmit}>
        <ViewAgendaIcon />
        <h1 className="title">quizYourself</h1>
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
          <label htmlFor="amount">Number of Questions</label>
          <input
            type="number"
            id="amount"
            min="1"
            step="1"
            defaultValue={25}
            ref={amountEl}
          />
        </div>
        <div className="form-group">
          <button className="btn">
            Generate <br />
            Flashcards
          </button>
        </div>
      </form>

      <div className="container">
        <Sidebar onFontSelect={(font) => handleFontName(font)} />
        <div className="flashcard-grid">
          <FlashcardList flashcards={flashcards} font={font} />
        </div>
      </div>
      <Footer />
    </>
  );
}
