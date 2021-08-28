import DarkWindow from "../services/dark.js";

class Mov{
  constructor(_parent,_item){
    this.parent = _parent;
    this.img = _item.Poster;
    // במקרה שתמונה לא קיימת במאגר
    // אז נציג סימן שאלה במקום
    if(this.img == "N/A"){
      this.img = "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
    this.title = _item.Title;
    this.shortTitle = _item.Title;
    if(this.title.length > 25){
      this.shortTitle =  this.title.substr(0,25)+"..."
    }
    this.year = _item.Year;
    this.id = _item.imdbID
  }

  // 10:57 להיות

  render(){
    let newArticle = $(`<article class="col-lg-4 p-2"></article>`)
    $(this.parent).append(newArticle);

    let shadowDiv = $(` <div class="shadow border">`)
    $(newArticle).append(shadowDiv);

    $(shadowDiv).append(`
    <div class="card_img "
    style="background-image: url(${this.img});">
  </div>
  <h2 class="px-2 m-0">${this.shortTitle}</h2>
  <div class="p-2">year:${this.year}</div>
  <button class="btn btn-dark ms-2 mb-2">More info</button>
    `)
    $(shadowDiv).on("click",() => {
      DarkWindow.showDarkWindowApi(this.id);
    })
  }
}

export default Mov;