import React from 'react';
{
  /*const message = winner
? `winner is ${winner}`
: `Next player is ${current.isXNext ? 'X' : 'O'}`;*/
}

const Status = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);
  {
    /*return boolean value*/
  }
  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{''}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {' '}
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next player is{' '}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : 'O'}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X </span>and
          <span className="text-orange"> O </span> Tied
        </>
      )}
    </div>
  );
};

export default Status;
