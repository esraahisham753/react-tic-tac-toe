import { useState, useEffect } from "react";
import Cell from "./components/Cell";

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState(null);

  const message = `It's now the ${go}'s go`;

  const checkScore = () => {
    const winningCombo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningCombo.forEach((array) => {
      let circleWins = array.every((cell) => cells[cell] === 'circle');
      if(circleWins) {
        setWinningMessage('Circle wins!');
      }
    });

    winningCombo.forEach((array) => {
      let crossWins = array.every((cell) => cells[cell] === 'cross');
      if(crossWins) {
        setWinningMessage('Cross wins!');
      }
    });
  };

  const reset = () => {
    setCells(["", "", "", "", "", "", "", "", ""]);
  }

  useEffect(() => {
    checkScore();
  }, [cells]);

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            cell={cell}
            key={index}
            id={index}
            go={go}
            setGo={setGo}
            cells={cells}
            setCells={setCells}
            winningMessage={winningMessage}
          />
        ))}
      </div>
      <p>{winningMessage || message}</p>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default App;
