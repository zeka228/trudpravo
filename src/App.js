import { useState } from "react";
import Game from "./components/Game";
import LifeIndicator from "./components/LifeIndicator";

export default function App() {
  const [lives, setLives] = useState(3);
  const handleAnswer = (isCorrect) => {
    if (!isCorrect) {
      setLives((prev) => {
        const newLives = prev - 1;
        if (newLives <= 0) {
          window.location.reload();
        }
        return newLives;
      });
    }
  };

  return (
    <>
      <LifeIndicator lives={lives} />
      <Game onAnswer={handleAnswer}/>
      <div className="bg-elems l"></div>
      <div className="bg-elems r"></div>
    </>
  );
}
