import React from 'react';

/*const Square = props => {
  console.log(props);
  return <button type="button">{props.value}</button>;
};*/
const Square = ({ value, onClick, iswinningsquare }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: iswinningsquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};
export default Square;
