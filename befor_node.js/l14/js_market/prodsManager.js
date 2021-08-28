function createAllProds(_ar){
  // in the future , forEach become map !!!😊🧀
  _ar.forEach(function(item){
    console.log(item);
    let prod = new Prod("#id_row",item.image,item.price,item.name,item.cat);
    prod.render();
  })
}


