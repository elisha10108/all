class Coin {
  constructor(_parent,_item){
    this.parent = _parent;
    this.name = _item.name;
    this.price = _item.price_usd
  }

  render(){
    let newDiv = $(`<div class="col-lg-7 border p-2"></div>`)
    $(this.parent).append(newDiv);
    $(newDiv).append(`
      <h3>${this.name}</h3>
      <div>Value: ${this.price}</div>
    `)
  }
}