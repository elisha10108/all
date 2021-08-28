// קובץ ראשי של אפליקציה אצלנו תמיד יתחיל אפ
let speed = 2
window.onload = function(){
  init();
  let car = {
    speed:4,
    showSpeed:function(){
      alert(this.speed)
    }
  }
  let preson = {
    speed:5,
    showSpeed:function(){
      alert(this.speed)
    }
  }
}


function init(){
  // במקום לייצר אובייקט חדש משתמשים במחלקה
  let car1 = CarClass("opel",2020,"white");
  car1.addToHtml();
  car1.addToColor();
  console.log(car1);
  let car2 = CarClass("Ferrari",1984,"red");
  car2.addToHtml();
  car2.addToColor();
  let car3 = CarClass("Lada",2010,"blue");
  car3.addToHtml();
  car3.addToColor();
}