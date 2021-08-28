

window.onload = init;

function init() {
  addWorker("pic2.jpg","jack cohen","jack@walla.com","09231");
  addWorker("pic3.jpg","biden junior","biden@walla.com","021321231");
}



function addWorker(_img, _name, _email, _phone) {
  document.querySelector("#id_row").innerHTML += `
  <div class="border p-2 col-lg-6">
    <img src="images/${_img}" class="w-25 float-left mr-2" alt="${_name}">
    <h3>${_name}</h3>
    <div>Email: ${_email}</div>
    <div>Phone: ${_phone}</div>
  </div>
  `;
}