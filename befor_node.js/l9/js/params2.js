



window.onload = init;

function init(){

}



function changeJack(){
  changeWorker("pic2.jpg","jack jack","jack@wa.com","99999");
}

function changeBiden(){
  changeWorker("pic3.jpg","Biden biden","biden@wa.com","1199999");
}



function changeWorker(_img,_name,_email,_phone){
  document.querySelector("#id_img").src = "images/"+_img;
  document.querySelector("#id_img").alt = _name;
  document.querySelector("#id_name").innerHTML = _name;
  document.querySelector("#id_email").innerHTML = "Email:"+_email;
  document.querySelector("#id_phone").innerHTML = "Phone:"+_phone;

  
}