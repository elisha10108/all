// לא לשכוח לחבר גם את הסי אס אס של הדארק

const darkInit = () => {
  renderDarkWindow();
  declareDarkEvents();
}

const renderDarkWindow = () => {
  // ייתכן שנעבוד מול פרוייקט שיש אירועים
  // לתגיות שנמצאות מראש בבאדי
  // לכן עדיף כדי לא להכנס לבאג של ביטול אירועים
  // לאחר שמייצרים מידע באיננר אייץ טי אם אל
  // לייצר את האלמנט של האבא בקרייאט אלמנט
  let darkDiv = document.createElement("div");
  darkDiv.className = "dark_window";
  darkDiv.id = "id_dark_window";
  document.body.append(darkDiv);

  // darkDiv.style.backgroundImage = `url(https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`;

  darkDiv.innerHTML += `
  <div class="dark_box_inside">
    <img id="id_dark_img" src="" class="w-50 float-left mr-2">
    <h2 id="id_dark_title"></h2>
    <p id="id_dark_p"></p>
    <button id="dark_close_btn" class="btn btn-danger">close</button>
</div>
  `
}

const declareDarkEvents = () => {
  document.querySelector("#dark_close_btn").addEventListener("click",() => {
    document.querySelector("#id_dark_window").style.display = "none";
  })
}
// 11:08

const showDark = (_img,_title,_info) => {
  console.log("aaa");
  document.querySelector("#id_dark_window").style.display = "flex";
  document.querySelector("#id_dark_img").src = _img;
  document.querySelector("#id_dark_title").innerHTML = _title;
  document.querySelector("#id_dark_p").innerHTML = _info;

}