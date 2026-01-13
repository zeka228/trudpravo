export default function AnswerCard({ answer, isSelected, isWrong, onClick }) {
  let className = "answer-card";
  if (answer.status === "correct") className += " correct";
  else if (isSelected) className += " selected";
  else if (isWrong) className += " wrong";

  return (
    <div className={className} onClick={onClick}>
      {answer.t}
    </div>
  );
}
