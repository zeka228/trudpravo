export default function QuestionBox({ question, answers, onClick }) {
  let className = "question-box";
  if (answers.length) className += " placed";

  return (
    <div className={className} onClick={onClick}>
      <div className="question-title">{question.text}</div>
      <div className="question-answers">
        {answers.map(a => (
          <div key={a.id} className="answer-card placed">
            {a.t}
          </div>
        ))}
      </div>
    </div>
  );
}
