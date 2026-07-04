import "../screen.css";
import OutOfGameHeader from "./header/OutOfGameHeader";
import HighScores from "./score/HighScores";

export default function TitleScreen() {
  return (
    <div className="titleScreen">
      <OutOfGameHeader />
      <HighScores />
    </div>
  );
}
