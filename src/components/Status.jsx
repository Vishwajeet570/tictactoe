import React from 'react';
{
  /*const message = winner
? `winner is ${winner}`
: `Next player is ${current.isXNext ? 'X' : 'O'}`;*/
}

const Status = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);
  return (
    <h2>
      {winner && `winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && `Match Tied`}
    </h2>
  );
};

export default Status;
