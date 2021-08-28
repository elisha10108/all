$(() => {
   createPics()

   $("#id_row img").on("click",function() {
    let urlImg = $(this).attr("src");
    let alt = $(this).attr("alt");
    DarkWindow.showDarkWindow(urlImg);
  })
  DarkWindow.createDarkWindow();
})



const createPics = () => {
  let img1 = new ImgClass("#id_row1","../imges1/pic1.jpg",200,260,"hello");
  let img2 = new ImgClass("#id_row2","../imges1/pic2.jpg",200,260,"hello");
  let img3 = new ImgClass("#id_row3","../imges1/pic3.jpg",200,260,"hello");
  let img4 = new ImgClass("#id_row1","../imges1/pic4.jpg",200,260,"hello");
  let img5 = new ImgClass("#id_row2","../imges1/pic5.jpg",200,260,"hello");
  let img6 = new ImgClass("#id_row3","../imges1/pic7.jpg",200,260,"hello");
  let img7 = new ImgClass("#id_row1","../imges1/pic8.jpg",200,260,"hello");
  let img8 = new ImgClass("#id_row2","../imges1/pic9.jpg",200,260,"hello");



  let img9 = new ImgClass("#id_row3","../imges1/pic10.jpg",200,260,"hello");
  let img10 = new ImgClass("#id_row1","../imges1/pic11.jpg",200,260,"hello");
  let img11 = new ImgClass("#id_row2","../imges1/pic12.jpg",200,260,"hello");
  let img12 = new ImgClass("#id_row3","../imges1/pic13.jpg",200,260,"hello");
  let img13 = new ImgClass("#id_row1","../imges1/pic14.jpg",200,260,"hello");
  let img14 = new ImgClass("#id_row2","../imges1/pic15.jpg",200,260,"hello");
  let img15 = new ImgClass("#id_row3","../imges1/pic16.jpg",200,260,"hello");
  let img16= new ImgClass("#id_row1","../imges1/pic19.jpg",200,260,"hello");


  let img17 = new ImgClass("#id_row2","../imges1/pic18.jpg",200,260,"hello");
  let img18= new ImgClass("#id_row3","../imges1/pic19.jpg",200,260,"hello");
  let img19 = new ImgClass("#id_row1","../imges1/pic5.jpg",200,260,"hello");
  let img20= new ImgClass("#id_row2","../imges1/pic4.jpg",200,260,"hello");
  let img21= new ImgClass("#id_row3","../imges1/pic5.jpg",200,260,"hello");
  let img22= new ImgClass("#id_row1","../imges1/pic7.jpg",200,260,"hello");
  let img23= new ImgClass("#id_row2","../imges1/pic8.jpg",200,260,"hello");
  let img24= new ImgClass("#id_row3","../imges1/pic9.jpg",200,260,"hello");

}
