/**
 * Challenge:
 * Move the "business logic" into a custom hook, which will provide
 * any parts of state and any functions to this component to use.
 *
 * You can easily tell which parts the component needs by looking at
 * the variables being used inside the `return`ed markup below.
 */

import React, { useEffect } from "react";
import useWordGame from "./useWordGame";

function App() {
  const {
    text,
    start,
    textBoxRef,
    timeRemaining,
    wordCount,
    countWords,
    setTimeRemaining,
    handleText,
    setStart,
    startGame,
    setWordCount,
  } = useWordGame();

  return (
    <main>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textBoxRef}
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
