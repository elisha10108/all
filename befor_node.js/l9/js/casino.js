let coins;

window.onload = function () {
  resetApp();
}

function resetApp() {
  coins = 5;
  document.querySelector("#id_coins").innerHTML = coins;
}

function onRollClick() {
  

  if (coins > 0) {
    let rnd = Math.random() * 6;
    rnd = Math.ceil(rnd); // 1-6
    // פקודה להדפס בקונסול שרק מתכנתים רואים
    console.log(rnd);
    document.querySelector("#id_img").src = `rnd_images/dice${rnd}.jpg`;

    coins--;
    if (rnd >= 5) {
      coins += 2;
      document.querySelector("#id_win_lose").innerHTML = "WIN";
      document.querySelector("#id_win_lose").style.background = "greenyellow";
    }
    else {
      document.querySelector("#id_win_lose").innerHTML = "You loser";
      document.querySelector("#id_win_lose").style.background = "orange";
    }
    document.querySelector("#id_coins").innerHTML = coins;
  }
  else{
    document.querySelector("#id_win_lose").innerHTML = "Go to the bank !";
    document.querySelector("#id_win_lose").style.background = "red";
  }
}