import "../screen.css";
import DuringGameHeader from "./header/DuringGameHeader";
import MoleField from "./game/MoleField";

export default function GameScreen() {
  return (
    <div className="game screen">
      <DuringGameHeader />
      <MoleField />
    </div>
  );
}
