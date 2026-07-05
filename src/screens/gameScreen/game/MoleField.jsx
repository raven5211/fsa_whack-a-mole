import "./game.css";
import Hole from "./Hole";
import { UseGame } from "../../../context/GameContext";

export default function MoleField() {
  const { field } = UseGame();

  return (
    <ul className="moleField">
      {field.map((row) => {
        return row.map((hole) => {
          return <Hole key={`${hole.row}${hole.col}`} hole={hole} />;
        });
      })}
    </ul>
  );
}
