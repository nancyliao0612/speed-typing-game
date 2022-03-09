import { useState, useEffect, useRef } from "react";

function useWordGame() {
  const [text, setText] = useState("");
  const [start, setStart] = useState(false);
  const textBoxRef = useRef(null);
  const [wordCount, setWordCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(15);

  function handleText(e) {
    setText(e.target.value);
  }
  function countWords(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }
  function startGame() {
    setStart(true);
    setText("");
    setTimeRemaining(15);
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
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

  return {
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
  };
}

export default useWordGame;
