class Prod{
  // constructor(_parent , _name, _amount, _id){
    // שיטה שחוסכת בכתיבה בכל הקבצים להעביר פשוט את האייטים
  constructor(_parent , _item){
    this.parent = _parent;
    this.name = _item.name;
    this.amount = _item.amount;
    this.id = _item.id;
  }

  render(){
    // let newDiv = document.createElement("div");
    let newDiv = $("<div class='border p-2 w-75 bg-info'>");
    $(this.parent).append(newDiv);

    let newBtn = $("<button class='btn btn-danger float-right'>X</button>")
    $(newDiv).append(newBtn)
    $(newDiv).append( `
      <h4>${this.name}, amount: ${this.amount}</h4>
    `);

    $(newBtn).on("click",() => {
      delSingleProd(this.id);
    })
  }
}