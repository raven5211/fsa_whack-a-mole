import Instructions from "./Instructions";
import PlayButton from "./PlayButton";

export default function OutOfGameHeader() {
  return (
    <div className="header outOfGame">
      <Instructions />
      <PlayButton />
    </div>
  );
}
