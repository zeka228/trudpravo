import QRCodes from "./QRCodes";

const ResultStatus = ({ vasPercent }) => {
  if (vasPercent > 0.6) {
    return (
      <span className="score-success">Квест пройден!</span>
    );
  } else {
      return (
        <span className="score-fail">Квест провален!</span>
      )
  }
};

export default function ScoreScreen({ vas }) {
  const vasPercent = vas / 20

  return (
    <div className="screen-wrapper">
      <hr className="game-separator"/>
        <div className="game-title">Результат:</div>
        <div className="scoreboard">
          <ResultStatus vasPercent={vasPercent} />
          <div>Правильные ответы: {vas} / 20</div>
          <div>{vasPercent * 100}%</div>
        </div>
        <QRCodes />
      <hr className="game-separator"/>
    </div>
  )
}