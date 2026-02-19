import QRCodes from "./QRCodes";

export default function ScoreScreen({}) {
    return (
      <div className="screen-wrapper">
        <hr className="game-separator"/>
          <div className="game-title">Результат</div>
          <QRCodes />
        <hr className="game-separator"/>
      </div>
    )
}