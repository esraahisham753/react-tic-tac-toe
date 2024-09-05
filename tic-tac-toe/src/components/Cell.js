const Cell = ({ cell, id, go, setGo, cells, setCells, winningMessage }) => {
  const handleClick = (e) => {
    if (!winningMessage) {
      const taken =
        e.target.firstChild?.classList.contains("circle") ||
        e.target.firstChild?.classList.contains("cross") ||
        e.target.classList.contains('circle') ||
        e.target.classList.contains('cross');

      if (!taken) {
        if (go === "circle") {
          //e.target.firstChild.classList.add("circle");
          handleChange("circle");
          setGo("cross");
        } else {
          //e.target.firstChild.classList.add("cross");
          handleChange("cross");
          setGo("circle");
        }
      }
    }
  };

  const handleChange = (className) => {
    const nextCells = cells.map((cell, index) => {
      if (id === index) {
        return className;
      } else {
        return cell;
      }
    });

    setCells(nextCells);
  };

  return (
    <div className="square" id={id} onClick={handleClick}>
      <div className={cell}></div>
    </div>
  );
};

export default Cell;
