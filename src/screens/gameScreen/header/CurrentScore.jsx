import "../../header.css";
import { UseGame } from "../../../context/GameContext";

export default function CurrentScore() {
  const { currentScore } = UseGame();

  return <p className="pseudoButton currentScore">Score: {currentScore}</p>;
}
