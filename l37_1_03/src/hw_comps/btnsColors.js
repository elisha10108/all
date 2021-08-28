import React from 'react';

function BtnsColors(props){


  return(
    <div>
      <button onClick={() => {props.setColorFont("red")}}>Red</button>
      <button onClick={() => {props.setColorFont("blue")}}>Blue</button>
      <button onClick={() => {props.setColorFont("green")}}>Green</button>
    </div> 
  )
}

export default BtnsColors