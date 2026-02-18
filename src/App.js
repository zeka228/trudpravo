import { useState } from "react";

import TitleScreen from "./components/TitleScreen";
import BGImages from "./components/BGImages";

export default function App() {
  const [currentStep, setStep] = useState(0);

  const CurrentStepComponent = () => {
    switch (currentStep) {
      case 0: return <TitleScreen onClick={() => setStep(1)}/>
      default: return <></>
    }
  }

  return (
    <>
      <CurrentStepComponent />
      <BGImages />
    </>
  );
}
