class Bike{
  constructor(_parent,_name,_color){
    this.parent = _parent;
    this.name = _name;
    this.color = _color;
  }

  render(){
    let newDiv = document.createElement("div");
    document.querySelector(this.parent).append(newDiv);
   // במידה ואני רוצה לדבר עם משתנה או אלמנט שיצרתי
   // בתוך מיטודה אז ניתן להגדיר אותו בתור מאפיין
   // שיהיה גלובלי למחלקה
    this.newDiv = newDiv;


    newDiv.innerHTML += `
      <h2>${this.name}</h2>
    `;
    // אם אני רוצה לעשות שרשור אני חייב
    // להחזיר את האובייקט
    //  bike.render().changeColor();
    return this;
  }

  changeColor(){
    this.newDiv.style.color = this.color;
    return this;
  }
}

// 14:55