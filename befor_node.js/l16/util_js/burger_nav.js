const burgerInit = () => {
  let burgerBtn = document.querySelector("#id_burger");
  let burgerNav = document.querySelector("#id_nav_burger");

  burgerBtn.addEventListener("click",() => {
    // אם התפריט מוצג או לא ויציג או יסתיר אותו בהאתם
    // בברירת מחדל בסי אס אס הוא מוסתר
    if(burgerNav.style.display != "block"){
      burgerNav.style.display = "block";
    }
    else{
      burgerNav.style.display = "none";
    }
  })
}