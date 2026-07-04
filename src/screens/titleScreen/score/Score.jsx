import "./score.css";

export default function Score({ score }) {
  return (
    <li key={score.id} className="score">
      {score.score}
    </li>
  );
}
