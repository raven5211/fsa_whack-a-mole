import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [isInGame, setIsInGame] = useState(false);
  const [scores, setScores] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(15);

  const value = {
    isInGame,
    setIsInGame,
    scores,
    setScores,
    currentScore,
    setCurrentScore,
    timeRemaining,
    setTimeRemaining,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function UseGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw Error("UseGame must be used within a GameContext provider");
  }

  return context;
}
