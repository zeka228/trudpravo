export default function Timer({ timeLeft }) {
  return (
    <div className="timer">
      <span>Осталось времени:</span><div>{timeLeft}</div>
    </div>
  );
}