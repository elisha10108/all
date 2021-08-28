window.onload = () => {
  init();
}

const init = () => {
  declareImgsClick();
  darkInit();
  burgerInit();
  AOS.init();
}

const declareImgsClick = () => {
  let imgs_ar = document.querySelectorAll(".team img");
  imgs_ar.forEach(itemImgTag => {
    itemImgTag.addEventListener("click", () => {
      showDark(itemImgTag.src, itemImgTag.dataset.name,"");
      // alert(itemImgTag.dataset.name);
    })
    
  })
}