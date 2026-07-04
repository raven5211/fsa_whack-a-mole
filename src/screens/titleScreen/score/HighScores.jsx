import "./score.css";
import Score from "./Score";
import { UseGame } from "../../../context/GameContext";

export default function HighScores() {
  const { scores, setScores } = UseGame();

  if (scores.length === 0) {
    return (
      <div className="scores">
        <h2>High Scores</h2>
        <p>None yet... Play the game!</p>
      </div>
    );
  } else {
    return (
      <div className="scores">
        <h2>High Scores</h2>
        <ul>
          {scores.map((score) => {
            console.log(score);
            return <Score key={score.id} score={score} />;
          })}
        </ul>
      </div>
    );
  }
}
