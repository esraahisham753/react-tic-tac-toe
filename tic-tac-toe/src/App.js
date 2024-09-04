import { useState } from "react";
import Cell from "./components/Cell";

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState('circle');
  const [winningMessage, setWinningMessage] = useState(null);

  const message = `It's now the ${go}'s go`;

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell cell={cell} key={index} id={index} go={go}/>
        ))}
      </div>
      <p>{winningMessage || message}</p>
    </div>
  );
};

export default App;
