import { createContext, useContext, useState, useEffect } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [isInGame, setIsInGame] = useState(false);
  const [scores, setScores] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(15);
  const [timerInterval, setTimerInterval] = useState();

  function startGame() {
    setCurrentScore(0);
    setTimeRemaining(15);
    setIsInGame(true);
  }

  function endGame() {
    setScores([...scores, { id: scores.length, score: currentScore }]);
    clearInterval(timerInterval);
    setTimerInterval(null);
    setIsInGame(false);
  }

  const value = {
    isInGame,
    setIsInGame,
    scores,
    setScores,
    currentScore,
    setCurrentScore,
    timeRemaining,
    setTimeRemaining,
    startGame,
    endGame,
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
