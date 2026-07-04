import "../../header.css";
import { UseGame } from "../../../context/GameContext";

export default function RestartButton() {
  const { scores, setScores, currentScore, setIsInGame } = UseGame();
  return (
    <button
      onClick={() => {
        setScores([...scores, { id: scores.length, score: currentScore }]);
        setIsInGame(false);
      }}
    >
      Restart
    </button>
  );
}
