export default function AnswerCard({ answer, isSelected, onClick }) {
  let className = "answer-card";
  if (answer.status === "correct") className += " correct";
  else if (answer.status === "wrong") className += " wrong";
  else if (isSelected) className += " selected";

  if (answer.status === "correct") className += " disabled";

  return (
    <div className={className} onClick={onClick}>
      {answer.t}
    </div>
  );
}
