
class ImgClass{
  constructor(_parent,_img,_height,_width,_alt){
    this.parent = _parent;
    this.img = _img;
    this.height = _height;
    this.width = _width;
    this.alt = _alt;
  this.render();
  }


  render(){
    let newImg = $(`<div class="row d-block   mb-3">
    <div class=" ">
    <div class=" ">
    <img class="p-1 w-100 h-50 " src="${this.img}" alt="${this.alt}"style="maxwidth: ${this.width}px !important; height: ${this.height}px !important;" >
    </div>
      </div>
      <div class=" center ">
      <p class="mr-md-0 mr-5 text-white text-center">
      Lorem ipsum dolor sit amet, quae consequuntur dicta necessitatibus veniam porro consectetur optio!  
     </p>
      </div>
    
    </div>`);
    $(this.parent).append(newImg);

    $(newImg).on("click", () => {
      DarkWindow.showDarkWindow(this.img);
    })
  }
}

 
