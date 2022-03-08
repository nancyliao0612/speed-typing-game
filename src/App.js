/**
 * Challenge:
 *
 * Make it so clicking the Start button starts the timer instead of it starting on refresh (Hint: use a new state variable to indicate if the game should be running or not)
 * */

import React, { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setStart(false);
    }
  }, [timeRemaining, start]);

  function handleText(e) {
    setText(e.target.value);
  }

  function countWords(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  function startGame() {
    setStart(true);
  }

  return (
    <main>
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange={handleText} className="textarea" />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame}>Start</button>
      <h1>Word Count:</h1>
    </main>
  );
}

export default App;
