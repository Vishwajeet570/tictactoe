import React, { useState } from 'react';
import Board from './components/Board';
import './components/styles/root.scss';
import { calculateWinner } from './helpers';

{
  /* it is global import form any file */
}
const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);
  const winner = calculateWinner(board);
  const message = winner
    ? `winner is ${winner}`
    : `Next player is ${isNext ? 'X' : 'O'}`;
  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (position === pos) {
          return isNext ? 'X' : 'O';
        }
        return square;
      });
    });
    setIsNext(prev => !prev);
  };
  return (
    <div className="app">
      {/*react.fragments or div upr wale arrow me*/}
      <h1>Tictactoe</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
