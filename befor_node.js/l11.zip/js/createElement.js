window.onload = function(){
  createBtns();
}


function createBtns(){
  addBtn("#id_parent","click me","btn btn-info","hello to you!");
  addBtn("#id_parent","danger","btn btn-danger","this is red button ");

  // 
  addBtnBg("#id_parent","change bg","btn btn-success",changeBodyBg);
  // להוסיף כפתור בצבע אדום שכתוב עליו 
  // DANGER
  // שמציג הודעה 
  // this is red button 
}


function addBtn(_parent,_txt,_cssClass,_message){
  let newBtn = document.createElement("button");
  newBtn.className = _cssClass;
  newBtn.innerHTML = _txt;
  // document.querySelector(_parent).appendChild(newBtn);
  document.querySelector(_parent).append(newBtn);

  newBtn.addEventListener("click",function(){
    alert(_message)
  })

  // document.querySelector(_parent).innerHTML += `
  //   <button  class="${_cssClass}">${_txt}</button>
  // `
}


// יצרנו פונקציה עם פרמטרים שאחד מהפרמטרים שלה הוא פונקציה
// שתפעל ברגע שלוחצים על האלמנט של הכפתור שהפונקציה מייצרת
// כאשר מעבירים פונקציה לפונקציה עם פרמטרים הפונקציה 
// שהיא פרמטר נקראת קולבק בשפה המקצועית
//addBtnBg("#id_parent","change bg","btn btn-success",changeBodyBg);

function addBtnBg(_parent,_txt,_cssClass,_callbackFunction){
  let newBtn = document.createElement("button");
  newBtn.className = _cssClass;
  newBtn.innerHTML = _txt;
  // document.querySelector(_parent).appendChild(newBtn);
  document.querySelector(_parent).append(newBtn);

  newBtn.addEventListener("click",function(){
    _callbackFunction();
  })

  // document.querySelector(_parent).innerHTML += `
  //   <button  class="${_cssClass}">${_txt}</button>
  // `
}


function changeBodyBg() {
  document.body.style.background = "red";
}