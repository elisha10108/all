window.onload = function(){
  init();
}

function init(){
  createCars();
}


// במציאות היה נמצא בקובץ שנקרא
//CARSMANAGER
function createCars(){
  //let ar = new Array()
  let car1 = new CarClass2("Toyota",2005,"silver");
  car1.addToHtml();
  // בשיטה הנוכחית של יצירת מחלקה בשיטה של עד 2017
  // ג'אווה סקריפט מייצר לעצמו תבנית וכל משתנה שמשתמש
  // במחלקה מבחינת זכרון משתמש באותו תבנית ככה שיש לנו חסכון בזכרון
  console.log(car1);

  let car2 = new CarClass2("Subaru",1990,"offwhite");
  car2.addToHtml();
  
}