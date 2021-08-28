import React, { useState } from 'react';
import GalleryResetBtn from './GalleryResetBtn';

function AppGallery(props){
  //    get    , set -> כשרוצים להגדיר את המשתנה בגט
  // לכל מאפיין סטייט נצטרך לפתוח משתנה ופונקציה
  // שתעשה לו סט
  let [counter,setCounter] = useState(0);

  let pics_ar = ["https://cdn.pixabay.com/photo/2017/07/05/15/41/milk-2474993_150.jpg",
  "https://cdn.pixabay.com/photo/2014/07/22/09/59/bread-399286_150.jpg",
"https://cdn.pixabay.com/photo/2015/09/17/17/19/egg-944495_150.jpg",
"https://cdn.pixabay.com/photo/2015/05/29/19/19/person-789663_150.jpg"];

  const onNext = () => {
    (counter < pics_ar.length-1)?
    setCounter(counter+1) : 
    setCounter(0);
  }

  const onBack = () => {
    (counter > 0)?
    setCounter(counter-1) : 
    setCounter(pics_ar.length-1);
  }

  const onReset = () => {
    setCounter(0);
  }

  return(
    <div className="container text-center">
      <img src={pics_ar[counter]} className="w-25" />
      <br/>
      <button onClick={onBack}>back</button>
      <button onClick={onNext}>next</button>
      {/* דוגמא לאיך מעבירים מיטודה של סט לסטייט באבא
      לילד  */}
      <GalleryResetBtn onReset={onReset} />
    </div> 
  )
}

export default AppGallery