import "../screen.css";
import OutOfGameHeader from "./header/OutOfGameHeader";
import HighScores from "./score/HighScores";

export default function TitleScreen() {
  return (
    <div className="title screen">
      <OutOfGameHeader />
      <HighScores />
    </div>
  );
}
