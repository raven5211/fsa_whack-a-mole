import TitleScreen from "./titleScreen/TitleScreen";
import GameScreen from "./gameScreen/GameScreen";
import { UseGame } from "../context/GameContext";

export default function Screen() {
  const { isInGame } = UseGame();
  return isInGame ? <GameScreen /> : <TitleScreen />;
}
