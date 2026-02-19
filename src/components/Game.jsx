import { useState } from "react";
import QuestionBox from "./QuestionBox";
import AnswerCard from "./AnswerCard";

import ContinueStep from "./ContinueStep";

const BaseQuest = ({ gameTitle, questions, answers, nextStep, vas }) => {
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
      const tempState = { ...prev, [qIndex]: newSet };
      if (Object.values(tempState).every(s => s.size > 0)) {
        setCompletedStep(true);
      }
      return { ...prev, [qIndex]: newSet };
    });
    setSelectedAnswerId(null);
  };
  
  const nextStepProcess = () => {
    let validAnswers = 0;
    for (const [k,v] of Object.entries(placedAnswers)) {
      const tSet = new Set(questions[k].va);
      if (tSet.size === v.size && [...tSet].every(i => v.has(i))) validAnswers++;
    }
    vas((prev) => prev + validAnswers);
    nextStep();
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
      <ContinueStep isCompleted={completedStep} onClick={nextStepProcess} />
    </div>
  );
}

export default BaseQuest;