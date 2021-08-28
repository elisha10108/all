class Car {
  constructor(_parent, _name, _color) {
    this.parent = _parent;
    this.name = _name;
    this.color = _color;
  }

  // render(){
  //   let newDiv = document.createElement("div");
  //   document.querySelector(this.parent).append(newDiv);

  //   newDiv.innerHTML += `
  //     <h2>${this.name} - ${this.color}</h2>
  //   `
  // }
}

// סיבה ראשונה אם מסיבה כלשהי רוצים לפצל מחלקה
// בשל האורך שלה ל2 קבצים או יותר ניתן בשיטה הזאת

// סיבה שניה - אם אין לנו גישה כלל למחלקה שאנחנו רוצים
// להוסיף לה מיטודה משלנו

Car.prototype.render = function(){
    let newDiv = document.createElement("div");
    document.querySelector(this.parent).append(newDiv);

    newDiv.innerHTML += `
      <h2>${this.name} ---- ${this.color}</h2>
    `
}