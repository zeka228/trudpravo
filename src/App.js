import { useState } from "react";

import Timer from "./components/RemainingTime";
import TitleScreen from "./components/TitleScreen";
import ScoreScreen from "./components/ScoreScreen";
import BaseQuest from "./components/Game";

import BGImages from "./components/BGImages";

import { 
  questionsLaw, answersLaw,
  questionsDiscipline, answersDiscipline,
  questionsWork, answersWork,
  questionsSalary, answersSalary
} from "./data/gameData";

export default function App() {
  const [currentStep, setStep] = useState(0);

  const CurrentStepComponent = () => {
    switch (currentStep) {
      case 0: return <TitleScreen onClick={() => setStep(1)}/>
      case 1: return <BaseQuest gameTitle="Трудовое право как отрасль права" questions={questionsLaw} answers={answersLaw} />
      case 2: return <BaseQuest gameTitle="Дисциплина труда" questions={questionsDiscipline} answers={answersDiscipline} />
      case 3: return <BaseQuest gameTitle="Трудовой договор и приём на работу" questions={questionsWork} answers={answersWork} />
      case 4: return <BaseQuest gameTitle="Оплата труда и материальная ответственность" questions={questionsSalary} answers={answersSalary} />
      case 5: return <ScoreScreen />
      default: return <></>
    }
  }

  return (
    <>
      <Timer timeLeft={1} />
      <CurrentStepComponent />
      <BGImages />
    </>
  );
}
