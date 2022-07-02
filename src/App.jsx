import React from 'react';
import Board from './components/Board';
import './components/styles/root.scss';
{
  /* it is global import form any file */
}
const app = () => (
  <div className="app">
    {/*react.fragments or div upr wale arrow me*/}
    <h1>Tictactoe</h1>
    <Board />
  </div>
);
export default app;
