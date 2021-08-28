class SpecialTable extends Table{
  constructor(_parent,_item){
    // this.parent = _parent;
    // this.legs = _item.legs;
    // this.meter = _item.meter
    // בעצם ביצע את הפעולה בקונסטקטור שירשנו כמו השורות למעלה
    super(_parent,_item);
    this.shape = _item.shape;
  }

  render(){
    super.render();
    this.newDiv.innerHTML += `
      <storng>Shape: ${this.shape}</storng>
    `
  }
}