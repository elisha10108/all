window.onload = function(){
  createsSlides()
}


function createsSlides(){
  addSlide(".carousel-inner","images/city2.jpeg",`<h1>Hello from js</h1>`,"active");
  addSlide(".carousel-inner","images/city3.jpeg",`<h1>Hello from js 2</h1>`);
  addSlide(".carousel-inner","images/city1.jpeg",`<h1>Hello from js 3</h1><button>click here</button>`);
}


function addSlide(_parent,_img,_html,_active){
  let st = `
  <div class="carousel-item ${_active}" style="background-image: url(${_img});">
  <div>
    <div>
      ${_html}
    </div>
  </div>
</div>
  `
  document.querySelector(_parent).innerHTML += st;
}

