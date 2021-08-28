// לייצר מחלקה של 
// ECMA 6 שמייצר קארד עם תמונה , שם , צפיות ועונות וכפתור
class SeriesClass{
  constructor(_parent,_img,_name,_views,_seasons,_info){
    this.parent = _parent;
    this.img = _img;
    this.name = _name;
    this.views = _views;
    this.seasons = _seasons;
    this.info = _info;
  }

  render(){
    let newDiv = document.createElement("div");
    newDiv.className = "card col-lg-3 p-0";
    document.querySelector(this.parent).append(newDiv);

    newDiv.innerHTML += `
    <img src="s_images/${this.img}" class="card-img-top" alt="${this.name}">
    `;

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    newDiv.append(cardBody);

    cardBody.innerHTML = `
    <h5 class="card-title">${this.name}</h5>
    <div class="card-text">Views: ${this.views}</div>
    <div class="card-text">Seasons: ${this.seasons}</div>
    `;

    let infoBtn = document.createElement("button");
    infoBtn.className = "btn btn-primary";
    infoBtn.innerHTML = "More info";
    cardBody.append(infoBtn);

    //infoBtn.info = this.info; // נותן מאפיין לכפתור
    //let _this = this; // מייצר משתנה גלובלי לרנדר שהפונקציה בכפתור מכירה
    // let obj = {info :" koko"}
    infoBtn.addEventListener("click",function(){
      // בברירת טיז מתייחס לכפתור ולא למחלקה
      alert(this.info);
    }.bind(this)) // BIND - הטיז בתוך הביינג מתייחס למחלקה
    //TODO: create button

  }
}