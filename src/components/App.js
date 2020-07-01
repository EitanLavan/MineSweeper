import React from 'react';

import MinesGame from './MinesGame';
import MinesGameParameters from './MinesGameParameters';

export function App({ initialData }) {
  const [gameId, setGameId] = React.useState(1);
  const [height, setHeight] = React.useState(10);
  const [width, setWidth] = React.useState(10);
  const [mines, setMines] = React.useState(2);

  return (
    <div>
      <div>
        <MinesGameParameters key={gameId} height={height} setHeight={setHeight} width={width} setWidth={setWidth} mines={mines} setMines={setMines} />
      </div>
      <div>
        <MinesGame key={gameId} height={height} width={width} mines={mines} startNewGame={() => setGameId(gameId + 1)} />
      </div>
      <div>
        gameId: {gameId}
      </div>
    </div>
  );
}