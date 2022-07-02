import React from 'react';

/*const Square = props => {
  console.log(props);
  return <button type="button">{props.value}</button>;
};*/
const Square = ({ value }) => {
  {
    /*children for <square></square> */
  }
  return (
    <button type="button" className="square">
      {value}
    </button>
  );
};
export default Square;
