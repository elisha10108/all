$(() => {
  init();
})


const init = () => {
  doApi();
}

const doApi = () => {
  let myUrl = "http://fs1.co.il/bus/shop.php";

  let xhr = new XMLHttpRequest();

  xhr.open("GET",myUrl);
  xhr.addEventListener("readystatechange",() => {
    if(xhr.status == 200 && xhr.readyState == 4){
      let json_ar = JSON.parse(xhr.response);
      console.log(json_ar)
      //TODO: manger file with function create (_Ar)
      // TODO: class file that created
    }
  })
  xhr.send();
}