export default function ContinueStep({ isCompleted, onClick }) {
  let className = "continue-button";
  if (isCompleted) className += " ready";
  return (
    <div className={className} onClick={onClick} >
      Следующий этап
    </div>
  )
};