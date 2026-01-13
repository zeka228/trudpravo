export default function QuestionBox({ question, answers, onClick, isComplete }) {
  let className = "question-box";
  if (isComplete) className += " complete";

  return (
    <div className={className} onClick={onClick}>
      <div className="question-title">{question.text}</div>
      <div className="question-answers">
        {answers.map(a => (
          <div key={a.id} className="answer-card correct">
            {a.t}
          </div>
        ))}
      </div>
    </div>
  );
}
