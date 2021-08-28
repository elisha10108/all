let lotto_ar = ["🥐","🍿","🍡","🍙","🍉","🥦","🍇","🍩","🍦","🍨"];
let counter = 0;
let timer;

const resetIcons = () => {
  document.querySelector("#id_parent").innerHTML = "";
  counter = 0;
  clearInterval(timer);
}

const startAddIcons = () => {
  let temp_ar = []
  // משכפל את המערך הראשי בלי רפרנס.פווינטר
  lotto_ar.forEach((item) => {
    temp_ar.push(item);
  })
  timer = setInterval(() => {
        let rnd = Math.random() * temp_ar.length;
        rnd = Math.floor(rnd);
       let icon = new Icon("#id_parent",temp_ar[rnd],rnd);
       icon.render()
       // מעיף את האייקון מהמערך ככה שלא יחזור על עצמו
       temp_ar.splice(rnd,1);
       counter++;
       if(counter >= 6){
         clearInterval(timer);
       }
  },300)
}