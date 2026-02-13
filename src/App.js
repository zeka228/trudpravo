import { useState } from "react";
import { QRCodeSVG } from 'qrcode.react';

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
      <div className="qr-box">
        <div className="qr-box-wrapper">
          <QRCodeSVG value="https://zeka228.github.io/trudpravo" />
          <span className="qr-box-subtitle">Онлайн-квест</span>
        </div>
        <div className="qr-box-wrapper">
          <QRCodeSVG value="https://vk.com/wall-227359500_241" />
          <span className="qr-box-subtitle">Лекция: ОСНОВЫ<br/>Трудового права в России.</span>
        </div>
      </div>
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
