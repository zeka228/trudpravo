import { useState } from "react";
import Game from "./components/Game";
import LifeIndicator from "./components/LifeIndicator";

import BGImage1 from "./bons/bg_1.jpg";
import BGImage2 from "./bons/bg_2.jpg";

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
      <LifeIndicator lives={lives} />
      <Game onAnswer={handleAnswer}/>
      <div className="bg-elems l">
        <img alt="bg_1.jpg" src={BGImage1}></img>
      </div>
      <div className="bg-elems r">
        <img alt="bg_2.jpg" src={BGImage2}></img>
      </div>
    </>
  );
}
