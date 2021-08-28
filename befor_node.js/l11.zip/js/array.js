let fruits_ar = ["apple","banana","kiwi","lemon"];

window.onload = function(){
  createFruits()
}

function createFruits(){
  // כדי לרוקן אלמנט משויים אותו לגרשיים ריקים
  dq("#id_ul").innerHTML = "";
  for(let i = 0; i < fruits_ar.length; i++){
    dq("#id_ul").innerHTML += `<li>${fruits_ar[i]}</li>`;
  }
}


function addNewFruit(){
  let newFruit = dq("#id_input").value;
  // להוסיף למערך בהתחלה
  fruits_ar.unshift(newFruit);
  createFruits();
  dq("#id_input").value = "";
}