import { useState } from "react";
import QuestionBox from "./QuestionBox";
import AnswerCard from "./AnswerCard";
import { questions_law, answers_law } from "../data/gameData";

export default function Game() {
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
  const [placedAnswers, setPlacedAnswers] = useState(() => {
    const obj = {};
    questions_law.forEach((_, i) => (obj[i] = new Set()));
    return obj;
  });

  const handleAnswerClick = (answerId) => {
    setSelectedAnswerId(answerId);
  };

  const handleQuestionClick = (qIndex) => {
    if (selectedAnswerId === null) return;
    //
    const question = questions_law[qIndex];
    if (question.va.includes(selectedAnswerId)) {
      setPlacedAnswers((prev) => {
        const newSet = new Set(prev[qIndex]);
        newSet.add(selectedAnswerId);
        return { ...prev, [qIndex]: newSet };
      });
    } else {
      // Flash red
    }
    //
    setSelectedAnswerId(null);
  };

  return (
    <div className="game">
      <div className="questions">
        {questions_law.map((q, qIndex) => {
          const placedSet = placedAnswers[qIndex];
          return (
            <QuestionBox
              key={qIndex}
              question={{text: q.q}}
              answers={answers_law.filter(a => placedSet.has(a.id))}
              onClick={() => handleQuestionClick(qIndex)}
              isComplete={q.va.every(id => placedSet.has(id))}
            />
          );
        })}
      </div>

      <div className="answers">
        {answers_law.map((a) => (
          <AnswerCard
            key={a.id}
            answer={{...a}}
            isSelected={a.id === selectedAnswerId}
            onClick={() => handleAnswerClick(a.id)}
          />
        ))}
      </div>
    </div>
  );
}
