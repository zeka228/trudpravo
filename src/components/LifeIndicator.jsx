export default function LifeIndicator({ lives }) {
  return (
    <div className="lives">
      <span>Попытки</span>
      <div>
        {Array.from({ length: lives }).map((_, i) => (
          <img src={require('../bons/heart.png')} alt="Heart"/>
        ))}
      </div>
    </div>
  );
}
