const adminTableManagerApi = async(_url) => {
  let data = await doApi(_url);
  console.log(data);
  createTable(data)
}

const createTable = (_ar) => {
  $("#id_tbody").empty();
  _ar.map((item,i) => {
    let prodTr = new TrProd("#id_tbody",item,i)
    prodTr.render();
  })
}
// ימחק את הרשומה לפי האי די
const deleteProd = async(_id) => {
  // TODO: change localhost 3000 to const
  let myUrl = "http://localhost:3000/prods/del/"+_id;
  let data = await doApiMethod(myUrl,"DELETE");
  if(data.n == 1){
    adminTableManagerApi("http://localhost:3000/prods");
  }
}