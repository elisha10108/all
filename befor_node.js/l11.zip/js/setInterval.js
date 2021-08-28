let counter = 0;
let timer;

window.onload = function(){
 viewEvents();
}

function viewEvents(){
  // האזנה לאירוע דרך הג'אווה סקריפט
  // שמפעיל פונקציה אנונימית
  document.querySelector("#play_btn").addEventListener("click",function(){
    console.log("play");
    // כדי שלא נכנס למצב שכמה אינטרבילים  פועלים בו זמנית
    // ואז יהיה סוג של באג נוסיף ניקוי אינטרבל אחרון
    clearInterval(timer);
    // 1000 -> 1 sec
    timer = setInterval(playCounter,1000)
    // ברגע שלחוצים פליי הקאונטר יתחיל לעלות ב 1 כל שניה
    // ויודפס ב אייץ 2
  })
  // האזנה לאירוע דרך הג'אווה סקריפט
  // וקריאה לפונקציה מוכרזת
  document.querySelector("#stop_btn").addEventListener("click",onStopClick)
  
}

function playCounter(){
  counter++;
  dq("#id_h2").innerHTML = counter;
}


function onStopClick(){
  clearInterval(timer);
  console.log("stop");
}