/**
 * Challenge: Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change
 */
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  function handleText(e) {
    setText(e.target.value);
  }

  console.log(text);

  return (
    <main>
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange={handleText} className="textarea" />
      <h4>Time remaining: </h4>
      <button>Start</button>
      <h1>Word Count:</h1>
    </main>
  );
}

export default App;
