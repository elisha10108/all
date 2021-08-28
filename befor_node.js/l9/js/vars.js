let coins;
let stars;

window.onload = init;

function init() {
  resetApp();
}

function resetApp() {
  coins = 10;
  stars = 1;
 
  updateUi();
}

function buy1Star() {
  if (coins >= 3) {
    coins -= 3;
    stars++;
   updateUi();
  }
  else{
    alert("go to the ATM ");
    
  }
}

function updateUi(){
  document.querySelector("#id_stars").innerHTML = stars;
  document.querySelector("#id_coins").innerHTML = coins;
}



// השחקן מתחיל עם 10 מטבעות וכוכב אחד
// עלות של כוכב אחד הינה 3 מטבעות

// בונוס- היוזר לא יכול להכנס למינוס
// ואם הוא מנסה לקנות אם אין לו מספיק מטבעות
// הוא יקבל הודעה 
// GO TO THE BANK, AND BRING MORE MONEY


// בונוס , צור כפתור ריסט לאפליקציה שתתחיל מ0