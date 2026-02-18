import { useState } from "react";

import QRCodes from "./QRCodes";

export default function TitleScreen({}) {
    return (
      <>
        <hr className="game-separator"/>
          <div className="game-title">Квест: Трудовое право</div>
          <div className="start-button-wrapper">
            <div className="start-button">Начать</div>
            <span className="start-button-subtitle">10 минут / 20 вопросов / 4 темы</span>
          </div>
          <QRCodes />
        <hr className="game-separator"/>
      </>
    )
}
