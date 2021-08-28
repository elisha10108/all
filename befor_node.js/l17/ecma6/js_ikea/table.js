class Table {
  constructor(_parent, _item) {
    this.parent = _parent;
    this.legs = _item.legs;
    this.meter = _item.meter
    this.price_for_meter = 100;
  }

  render() {
    let newDiv = document.createElement("div");
    this.newDiv = newDiv;
    document.querySelector(this.parent).append(newDiv)
    newDiv.innerHTML += `
        <h2>Table legs: ${this.legs}</h2>
        <div>Tabel meter: ${this.meter}</div>
    `
  }

  renderPrice(){
    this.newDiv.innerHTML += `
    <p>Price:${this.price_for_meter * this.meter}</p>
    `
  }
}