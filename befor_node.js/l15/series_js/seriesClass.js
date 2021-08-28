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
    newDiv.className = "col-lg-4 border p-2";
    document.querySelector(this.parent).append(newDiv);

    let newImg = document.createElement("img");
    newImg.src = `s_images/${this.img}`
    newImg.className = "w-25 float-left mr-2";
    newDiv.append(newImg);

    // אם נרצה לייצר אלמנט שאפשא להאזין ללחיצה עליו
 
    newImg.addEventListener("click",() => {
      alert("click")
    })

    let insideDiv = document.createElement("div");
    newDiv.append(insideDiv);
   // אך לאחר מכן יש לנו איננר אייץ טי אם אל
    // אז אנחנו ניהיה חייבים לייצר את ההמשך בדיב 
    // חדש שנייצר בקריאט אלמנט
    insideDiv.innerHTML += `
    
    <h2>${this.name}</h2>
    <div>Views: ${this.views}</div>
    <div>Seasons: ${this.seasons}</div>
    `

    let infoBtn = document.createElement("button");
    infoBtn.innerHTML = "more info";
    infoBtn.className = "btn btn-dark float-right";

    newDiv.append(infoBtn);
    infoBtn.addEventListener("click",() => {
      // alert(this.info);
      showDark("s_images/"+this.img,this.name,this.info)
    })
    // צרו כפתור שלוחצים עליו
    // באלרט יוצג האינפו שלו
  }

}