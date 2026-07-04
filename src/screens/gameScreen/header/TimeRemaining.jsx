import "../../header.css";
import { UseGame } from "../../../context/GameContext";

export default function TimeRemaining() {
  const { timeRemaining } = UseGame();

  return <p className="time">Time: {timeRemaining}</p>;
}
