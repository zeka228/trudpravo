import { useState } from "react";
import QuestionBox from "./QuestionBox";
import AnswerCard from "./AnswerCard";

import ContinueStep from "./ContinueStep";

const BaseQuest = ({ gameTitle, questions, answers, nextStep }) => {
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
  const [completedStep, setCompletedStep] = useState(false);
  const [placedAnswers, setPlacedAnswers] = useState(() => {
    const obj = {};
    questions.forEach((_, i) => (obj[i] = new Set()));
    return obj;
  });
  const handleAnswerClick = (answerId) => {
    setSelectedAnswerId(answerId);
  };

  const handleQuestionClick = (qIndex) => {
    if (selectedAnswerId === null) return;

    setPlacedAnswers((prev) => {
      const newSet = new Set(prev[qIndex]);
      newSet.add(selectedAnswerId);
      return { ...prev, [qIndex]: newSet };
    });
    if (Object.values(placedAnswers).every(s => s.size > 0)) {
      setCompletedStep(true);
    }
    setSelectedAnswerId(null);
  };
  //
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    console.log(questions, answers)
  }
  //
  return (
    <div className="game">
      <div className="game-title"> {gameTitle} </div>
      <div className={"questions" + (selectedAnswerId == null ? "" : " active")}>
        {questions.map((q, qIndex) => {
          const placedSet = placedAnswers[qIndex];
          return (
            <QuestionBox
              key={qIndex}
              question={{text: q.q}}
              answers={answers.filter(a => placedSet.has(a.id))}
              onClick={() => handleQuestionClick(qIndex)}
            />
          );
        })}
      </div>
      <div className="answers">
        {answers.map((a) => (
          <AnswerCard
            key={a.id}
            answer={{...a}}
            isSelected={a.id === selectedAnswerId}
            onClick={() => handleAnswerClick(a.id)}
          />
        ))}
      </div>
    <ContinueStep isCompleted={completedStep} onClick={nextStep} />
    </div>
  );
}

export default BaseQuest;