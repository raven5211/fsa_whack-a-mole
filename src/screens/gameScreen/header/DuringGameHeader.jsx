import "../../header.css";
import CurrentScore from "./CurrentScore";
// import TimeRemaining from "./TimeRemaining";
import RestartButton from "./RestartButton";

export default function DuringGameHeader() {
  return (
    <div className="header duringGame">
      <CurrentScore />
      {/* <TimeRemaining className="pseudoButton" /> */}
      <RestartButton />
    </div>
  );
}
