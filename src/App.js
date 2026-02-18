import { useState } from "react";

import Game from "./components/Game";
import BGImages from "./components/BGImages";

export default function App() {
  const [lives, setLives] = useState(3);
  const [visible, setVisible] = useState(false);

  const Overlay = () => {
    return <div className={`overlay ${visible ? "show" : ""}`}></div>
  }

  const handleAnswer = (isCorrect) => {
    if (!isCorrect) {
      setLives((prev) => {
        const newLives = prev - 1;
        if (newLives <= 0) {
          setVisible(true);
          window.location.reload()
        }
        return newLives;
      });
    }
  };

  return (
    <>
      <Overlay />
      <Game onAnswer={handleAnswer}/>
      <BGImages />
    </>
  );
}
