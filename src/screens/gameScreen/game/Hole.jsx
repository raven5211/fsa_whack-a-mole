import "./game.css";
import { UseGame } from "../../../context/GameContext";

export default function Hole({ hole }) {
  const { currentScore, setCurrentScore, resetMole } = UseGame();

  if (hole.state === false) {
    return (
      <li
        key={`${hole.row}${hole.col}`}
        className={`hole${hole.state ? " mole" : ""}`}
      />
    );
  } else {
    return (
      <li
        key={`${hole.row}${hole.col}`}
        className={`hole${hole.state ? " mole" : ""}`}
        onClick={() => {
          setCurrentScore(currentScore + 1);
          resetMole();
        }}
      />
    );
  }
}
