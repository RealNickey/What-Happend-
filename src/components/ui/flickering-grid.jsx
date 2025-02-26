import React, { useEffect, useState } from "react";

const FlickeringGrid = () => {
  const [grid, setGrid] = useState([]);
  const rows = 10;
  const cols = 10;

  useEffect(() => {
    const createGrid = () => {
      const newGrid = [];
      for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
          row.push(Math.random() > 0.5);
        }
        newGrid.push(row);
      }
      return newGrid;
    };

    const interval = setInterval(() => {
      setGrid(createGrid());
    }, 500);

    setGrid(createGrid());

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <div className="grid h-full w-full" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
        {grid.flat().map((cell, index) => (
          <div
            key={index}
            className={`aspect-square border border-gray-800 transition-colors duration-500 ${cell ? 'bg-gray-800' : 'bg-transparent'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FlickeringGrid;