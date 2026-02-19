export default function ContinueStep({ isCompleted, onClick }) {
  let className = "continue-button";
  if (isCompleted) className += " ready";
  
  const onClickReady = () => {
    if (isCompleted) onClick(); else alert("Перед переходом на следующий этап, ответьте на каждый вопрос")
  }

  return (
    <div className={className} onClick={onClickReady} >
      Следующий этап
    </div>
  )
};