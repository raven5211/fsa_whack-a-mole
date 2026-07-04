import "./score.css";

export default function Score(score2) {
  console.log(score2);
  return <li key={score2.id}>{score2.score.score}</li>;
}
