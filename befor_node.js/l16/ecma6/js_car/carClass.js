class Car{
  constructor(_parent,_name,_color){
    this.parent = _parent;
    this.name = _name;
    this.color = _color;
  }

  render(){
    let newDiv = document.createElement("div");
    newDiv.style.border = "1px solid black";
    document.querySelector(this.parent).append(newDiv);
    // כדי שמיטודות אחרות במחלקה יכירו את האלמנט
    this.newDiv = newDiv;

    newDiv.innerHTML += `
    <h2>${this.name} - ${this.color}</h2>
    `
    
  }
}