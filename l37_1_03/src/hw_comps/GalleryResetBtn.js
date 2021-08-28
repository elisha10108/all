import React from 'react';

function GalleryResetBtn(props){
  return(
    <div>
      <button onClick={props.onReset}>Reset</button>
    </div> 
  )
}

export default GalleryResetBtn