class Pixa {
  constructor(_parent,_item){
    this.parent = _parent;
    this.img = _item.previewURL;
    this.tags = _item.tags;
    this.likes = _item.likes;
    this.views = _item.views;
    this.link = _item.pageURL;
  }

  render(){
    let newDiv = $(`<div class="border p-2 col-lg-6"></div>`)
    $(this.parent).append(newDiv);

    $(newDiv).append(`
    <img src="${this.img}" alt="${this.tags}" class="w-25 float-left mr-2" >
    <h2>Tags: ${this.tags}</h2>
    <div>likes: ${this.likes} </div>
    <div>views: ${this.views}</div>
    <a class="btn btn-info" href="${this.link}" target="_blank">More info</a>
    `)
  }
}

// אם זה מחלקה נהוג שנעשה לה אקספוטר דיפולט, וניתן לעשות
// איקספורט דיפולט פעם אחת פר קובץ
export default Pixa;