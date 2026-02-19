import QRCodes from "./QRCodes";

export default function TitleScreen({ onClick }) {
    return (
      <div className="screen-wrapper">
        <hr className="game-separator"/>
          <div className="game-title">Квест:<br></br>Трудовое право</div>
          <div className="start-button-wrapper">
            <div className="start-button" onClick={onClick}>Начать</div>
            <span className="start-button-subtitle">10 минут / 20 вопросов / 4 темы</span>
          </div>
          <QRCodes />
        <hr className="game-separator"/>
      </div>
    )
}
