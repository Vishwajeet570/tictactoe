import React, { useState } from 'react';
import Board from './components/Board';
import './components/styles/root.scss';
import { calculateWinner } from './helpers';
import History from './components/History';
import Status from './components/Status';
{
  /* it is global import form any file */
}
const newGame = [{ board: Array(9).fill(null), isXNext: true }];
const App = () => {
  const [history, setHistory] = useState(newGame);

  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];
  const { winner, winningsquares } = calculateWinner(current.board);

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory(prev => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (position === pos) {
          return last.isXNext ? 'X' : 'O';
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove(prev => prev + 1);
  };
  moveTo = move => {
    setCurrentMove(move);
  };
  const setNewGame = () => {
    setHistory(newGame);
    setCurrentMove(0);
  };
  return (
    <div className="app">
      {/*react.fragments or div upr wale arrow me*/}
      <h1>Tictactoe</h1>
      <Status winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningsquares={winningsquares}
      />
      <button type="button" onClick={setNewGame}>
        Start New Game
      </button>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};
export default App;
