class Icon{
  constructor(_parent,_icon,_num){
    this.parent = _parent;
    this.icon = _icon;
    this.num = _num; // לא בשימוש
  }

  render(){
      document.querySelector(this.parent).innerHTML += `
      <div class="border d-flex justify-content-center align-items-center rounded-circle p-5 m-2" style="width:100px; height:100px; font-size: 2.5em;">
      ${this.icon}
     </div>
      `
  }
}