import { useState } from "react";
import QuestionBox from "./QuestionBox";
import AnswerCard from "./AnswerCard";
import { 
  questionsLaw, answersLaw,
  questionsDiscipline, answersDiscipline,
  questionsWork, answersWork,
  questionsSalary, answersSalary
} from "../data/gameData";

const BaseQuest = ({ gameTitle, questions, answers, onAnswer }) => {
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
  const [wrongAnswer, setWrongAnswer] = useState(new Set());
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
    //
    const question = questions[qIndex];
    if (question.va.includes(selectedAnswerId)) {
      setPlacedAnswers((prev) => {
        const newSet = new Set(prev[qIndex]);
        newSet.add(selectedAnswerId);
        return { ...prev, [qIndex]: newSet };
      });
      onAnswer(true);
    } else {
      setWrongAnswer((prev) => new Set(prev).add(selectedAnswerId));
      setTimeout(() => {
        setWrongAnswer((prev) => {
          const newSet = new Set(prev);
          newSet.delete(selectedAnswerId);
          return newSet;
        });
      }, 300);
      onAnswer(false);
    }
    //
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
              isComplete={q.va.every(id => placedSet.has(id))}
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
            isWrong={wrongAnswer.has(a.id)}
            onClick={() => handleAnswerClick(a.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Game({ onAnswer }) {
  return (
    <>
      <BaseQuest gameTitle="Трудовое право как отрасль права" questions={questionsLaw} answers={answersLaw} onAnswer={onAnswer}/>
      <hr className="game-separator"/>
      <BaseQuest gameTitle="Дисциплина труда" questions={questionsDiscipline} answers={answersDiscipline} onAnswer={onAnswer}/>
      <hr className="game-separator"/>
      <BaseQuest gameTitle="Трудовой договор и приём на работу" questions={questionsWork} answers={answersWork} onAnswer={onAnswer}/>
      <hr className="game-separator"/>
      <BaseQuest gameTitle="Оплата труда и материальная ответственность" questions={questionsSalary} answers={answersSalary} onAnswer={onAnswer}/>
    </>
  )
};
