// prototype constructor class/function בשימוש עד 2017
function CarClass2(_model,_year,_color){
  this.model = _model;
  this.year = _year;
  this.color = _color;

  // אופציה ראשונה ליצירת מיטודה
  this.addToHtml = function(){
    document.body.innerHTML += `<h2>${this.model} - ${this.year}</h2>`;
    document.body.innerHTML += `<h3>${this.color}</h3>`
  }
}