import "../../header.css";
import { UseGame } from "../../../context/GameContext";

export default function RestartButton() {
  const { endGame } = UseGame();
  return (
    <button
      onClick={() => {
        endGame();
      }}
    >
      Restart
    </button>
  );
}
