const Cell = ({ cell, id, go }) => {
  const handleClick = (e) => {
    const taken =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross");
    
    if(!taken) {
        if(go === 'circle') {
            e.target.firstChild.classList.add('circle');
        }
    }
  };

  return (
    <div className="square" id={id} onClick={handleClick}>
      <div className="cell"></div>
    </div>
  );
};

export default Cell;
