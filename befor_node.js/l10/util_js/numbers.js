console.log("numbers log");


// לייצר פונקציה שנעביר לה 2 פרמטרים 
// פרמטר ראשון מספר מנימלי
// פרמטר שני מספר מקסימלי
// והיא תחזיר לי מספר רנדומלי שם בין הפרמטר המנימלי
// לפרמטר המקסימלי
                    //10  100
function randomNum(_min,_max){
  let rnd = Math.random() * ((_max-_min) + 1);
  rnd = Math.floor(rnd) ; // 0 - 90;
  rnd += _min // 10 - 100;
  return rnd;
}

// אותה פונקציה סטטית בין 10 ל 100
function randomNumStatic(){
  let rnd = Math.random() * (90 + 1); 0 - 90.999999999
  rnd = Math.floor(rnd) ; // 0 - 90;
  rnd += 10 // 10 - 100;
  return rnd;
}
