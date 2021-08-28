import React, { useState } from 'react';
import BtnsColors from './btnsColors';

function AppColor(props){
  let [colorFont,setColorFont] = useState("orange")

  return(
    <div className="container text-center">
      <h2 style={{color:colorFont}}>Choose your favorite color</h2>
      <BtnsColors setColorFont={setColorFont} />
    </div> 
  )
}

export default AppColor