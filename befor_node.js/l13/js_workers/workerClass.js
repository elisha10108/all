// class constructor

function WorkerClass(_parent,_img,_name,_age,_city){
  this.parent = _parent;
  this.img = _img;
  this.name = _name;
  this.age = _age;
  this.city = _city;

  // addToHtml = renderToHtml
  this.renderToHtml = function(){
    let newDiv = document.createElement("div");
    newDiv.className = "border p-2 col-lg-6";
    document.querySelector(this.parent).append(newDiv);

    newDiv.innerHTML += `
    <img src="workers_images/${this.img}" class="float-left w-25 mr-2">
        <h2>${this.name}</h2>
        <div>Age -- : ${this.age}</div>
        <div>City: ${this.city}</div>
    `
  }

 // this.renderToHtml();
}