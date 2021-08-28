const createProds = (_ar) => {
  _ar.map(item => {
    let prod = new Prod("#id_row",item);
    prod.render();
    // console.log(item);
  })
}