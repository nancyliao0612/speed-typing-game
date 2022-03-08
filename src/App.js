/**
 * Challenge:
 * When the timer reaches 0, count the number of words the user typed in
 * and display it in the "Word count" section
 *
 * After the game ends, make it so the user can click the Start button again
 * to play a second time
 * */

import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(15);
  const [start, setStart] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  function handleText(e) {
    setText(e.target.value);
  }

  function countWords(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  useEffect(() => {
    if (start && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setStart(false);
      setWordCount(countWords(text));
    }
  }, [timeRemaining, start]);

  function startGame() {
    setStart(true);
    setText("");
    setTimeRemaining(15);
  }

  return (
    <main>
      <h1>How fast do you type?</h1>
      <textarea
        value={text}
        onChange={handleText}
        className="textarea"
        disabled={!start}
      />
      <h4>Time remaining: {timeRemaining} sec</h4>
      <button onClick={startGame} disabled={start}>
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </main>
  );
}

export default App;
