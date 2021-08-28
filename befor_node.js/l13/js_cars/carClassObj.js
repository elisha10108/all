// class שימוש היה עד 2008
// חוסך את הצורך כל פעם לייצר אובייקט חדש עם כל המאפיינים והמיטודות
function CarClass(_model,_year,_color){
  let obj = {
    model:_model,
    year:_year,
    color:_color,
    addToHtml:function(){
      document.body.innerHTML += `<h2>${this.model} - ${this.year}</h2>`
    },
    addToColor:function(){
      document.body.innerHTML += `<h3>${this.color}</h3>`
    }
  }
  return obj;
}