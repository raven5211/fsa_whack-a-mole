import "../../header.css";
import { UseGame } from "../../../context/GameContext";

export default function RestartButton() {
  const { setIsInGame } = UseGame();
  return <button onClick={() => setIsInGame(false)}>Restart</button>;
}
