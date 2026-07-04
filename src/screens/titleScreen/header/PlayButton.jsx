import "../../header.css";
import { UseGame } from "../../../context/GameContext";

export default function PlayButton() {
  const { setIsInGame } = UseGame();
  return <button onClick={() => setIsInGame(true)}>Play</button>;
}
