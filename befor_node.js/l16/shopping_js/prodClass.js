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
    let newDiv = document.createElement("div");
    newDiv.className = "border p-2 w-75 bg-warning";
    document.querySelector(this.parent).append(newDiv);

    newDiv.innerHTML += `
      <h4>${this.name}, amount: ${this.amount}</h4>
    `
  }
}