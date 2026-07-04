import "../../header.css";
import { UseGame } from "../../../context/GameContext";

export default function PlayButton() {
  const { startGame } = UseGame();
  return <button onClick={() => startGame()}>Play</button>;
}
