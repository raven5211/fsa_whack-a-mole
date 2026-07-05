import { createContext, useContext, useState, useEffect } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [isInGame, setIsInGame] = useState(false);
  const [mole, setMole] = useState({ x: 0, y: 0 });
  const [field, setField] = useState(createField(mole));
  const [scores, setScores] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  //const [timeRemaining, setTimeRemaining] = useState(15);
  //const [timerInterval, setTimerInterval] = useState();

  function createField(location) {
    const field = [];

    for (let row = 0; row < 3; row++) {
      const newRow = [];
      for (let col = 0; col < 3; col++) {
        newRow.push({
          row: row,
          col: col,
          state: location.x === col && location.y === row,
        });
      }
      field.push(newRow);
    }

    //console.log(field);
    return field;
  }

  function putMoleInHole(row, col) {
    const newMole = { x: col, y: row };
    setMole(newMole);
    setField(createField(newMole));
  }

  function randomizeMole() {
    const newX = Math.floor(Math.random() * 3);
    const newY = Math.floor(Math.random() * 3);
    const newMole = { x: newX, y: newY };
    setMole(newMole);
    return newMole;
  }

  function resetMole() {
    const { x, y } = mole;

    let newMole;
    do {
      newMole = randomizeMole();
    } while (newMole.x == x && newMole.y == y);

    const newField = createField(newMole);
    setField(newField);
  }

  function startGame() {
    setCurrentScore(0);
    //setTimeRemaining(15);
    resetMole();
    setIsInGame(true);
  }

  function endGame() {
    setScores([...scores, { id: scores.length, score: currentScore }]);
    //clearInterval(timerInterval);
    //setTimerInterval(null);
    setIsInGame(false);
  }

  const value = {
    scores,
    setScores,
    currentScore,
    setCurrentScore,
    field,
    isInGame,
    resetMole,
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
