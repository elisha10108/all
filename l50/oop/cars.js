class Cars{
  constructor(_name,_color,_year){
    this.name = _name;
    this.color = _color;
    this.year = _year;
  }

  render(){
    let st = `<h2>${this.name}</h2>`
    st += `<div>${this.color}</div>`
    st += `<div>${this.year}</div>`

    return st;
  }
}