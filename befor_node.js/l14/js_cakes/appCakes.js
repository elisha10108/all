window.onload = function(){
  init();
}

function init(){
  createCakes();
}


// cakesManger אמור להיות בקובץ
function createCakes(){
  let cake1 = new CakeClass("#id_row","pic2.jpg","chocolate cake",3000,50);
  cake1.render();
  let cake2 = new CakeClass("#id_row","pic3.jpg","orange cake",3000,50);
  cake2.render();

  // let cake3 = new CakeClass6("#id_row","pic4.jpg","starberw cake",3000,50);
  // cake3.render();
}

