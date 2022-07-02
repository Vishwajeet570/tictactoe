import React from 'react';

/*const Square = props => {
  console.log(props);
  return <button type="button">{props.value}</button>;
};*/
const Square = ({ value, onClick }) => {
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};
export default Square;
