class Prod {
  constructor(_parent, _img, _price, _name, _cat) {
    this.parent = _parent;
    this.img = _img;
    this.cat = _cat;
    this.price = _price;
    this.name = _name;
  }
// 14:50 להיות כאן
  render() {
    let newDiv = document.createElement("div");
    newDiv.className = "col-lg-7 border p-2";
    document.querySelector(this.parent).append(newDiv);

    newDiv.innerHTML += `
    <img src="${this.img}" alt="${this.name}" class="w-25 float-right ml-2">
    <div class="badge badge-warning">${this.price} nis</div>
    <h3>${this.name}</h3>
    <div>Cat : ${this.cat}</div>
    `

    // ברגע שמשתמשים בפונקציית חץ אין צורך להוסיף ביינד בפונקציה של אירוע
     newDiv.addEventListener("click",() => {
       let price_usd = this.price/3.3;
       // TOFIXED -> יציג רק 2 ספרות אחרי הנקודה
      alert(price_usd.toFixed(2) + " USD");
    })

    // newDiv.addEventListener("click",function(){
    //   alert(this.price / 3.3 + " USD")
    // }.bind(this))
  }
}