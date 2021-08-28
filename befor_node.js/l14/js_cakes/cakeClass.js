
//ECMA 5 up to 2009 - 2017 R.I.P
function CakeClass(_parent,_img,_name,_cal,_price){
  this.parent = _parent;
  this.img = _img;
  this.name = _name;
  this.cal = _cal;
  this.price = _price;

  // render -> addToHtml
  this.render = function(){
    // divOut - הדיב החיצוני שיצרנו כדי לדמות מרג'ין
    let divOut = document.createElement("div");
    divOut.className = "col-lg-6 p-1";
    // append = appendChild -> חכם יותר
    document.querySelector(this.parent).append(divOut);

    // divIn - הדיב הפנימי שיהיה בתוך החיצוני
    let divIn = document.createElement("div");
    divIn.className = "border overflow-hidden p-1";
    // מוסיף את דיב אין לתוך דיב אווט
    divOut.append(divIn);

    divIn.innerHTML += `
    <img src="images/${this.img}" alt="${this.name}" class="float-left w-25 mr-2">
    <div class="badge badge-dark float-right">${this.price} nis</div>
    <h2>${this.name}</h2>
    <div>Cal: ${this.cal}</div>
    `
  }
}