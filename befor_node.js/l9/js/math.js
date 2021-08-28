window.onload = function(){

}


function onRollClick(){
  let rnd = Math.random() * 6; // 0 - 0.99999999
 // rnd = Math.round(rnd); // מעגל כלפי מעלה כאשר המספר המתקבל
 // גבוה מ חצי אחרת מעגל כלפי מטה

  //rnd = Math.floor(rnd); // תמיד מעגל כלפי מטה
  rnd = Math.ceil(rnd); // תמיד מעגל כלפי מעלה
  document.querySelector("#id_h2").innerHTML = rnd;
}





// 0.1 * 6 = 0.6;
//0.2 * 6 = 1.2;


//0.9 * 6 = 5.4