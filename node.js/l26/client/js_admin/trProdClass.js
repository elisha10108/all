class TrProd{
  constructor(_parent,_item,_index){
    this.parent = _parent;
    this.name = _item.name;
    this.price = _item.price;
    this.cat = _item.cat;
    this._id = _item._id;
    this.index = _index;
  }

  render(){
    let newTr = $("<tr></tr>");
    $(this.parent).append(newTr);

    $(newTr).append(`
      <td>${this.index}</td>
      <td>${this.name}</td>
      <td>${this.price} nis</td>
      <td>${this.cat}</td>
    `)
    let newTd = $("<td></td>");
    $(newTr).append(newTd);
    let btnDel = $(`<button class="btn btn-danger">Del</button>`)
    $(btnDel).on("click",() => {
      // מציג חלון כמו אלרט עם שאלה של אישור או ביטול
      let c = confirm("Are you sure you want to delete?")
      console.log(c);
      if(c){
        deleteProd(this._id)
      }
      // alert("delete")
    })
    $(newTd).append(btnDel);
    // TODO  edit link
  
  }
}
