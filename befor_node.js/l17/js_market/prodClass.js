class Prod{
  constructor(_parent,_item){
    this.parent = _parent;
    this.name = _item.name;
    this.image = _item.image;
    this.price =  _item.price;
  }

  render(){

    // let newDiv = document.createElement("div");
    // newDiv.className = "col-lg-6 border p-2";
    let newDiv = $(`<div class="col-lg-6 border p-2">`);
    // document.querySelector(this.parent).append(newDiv);
    $(this.parent).append(newDiv);

    let newBtn = $(`<button class="btn btn-dark">Add to cart</button>`)
    $(newDiv).append(newBtn);

    $(newDiv).append(`
    <img src="${this.image}" class="w-50 float-left mr-2" alt="${this.name}">
    <h2>${this.name}</h2>
    <div>Price:${this.price} NIS</div>
    `)

    $(newBtn).on("click",() => {
     // $(newBtn).css("background","red");
      alert(this.price);
    })
  
  }

}