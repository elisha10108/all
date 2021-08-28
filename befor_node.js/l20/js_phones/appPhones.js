$(() => {
  init();
})

const init = () => {
  // doApi()
  doApiAjax(); // JQEURY REST API REQUEST

}


// like doApi just in jquery
const doApiAjax = () => {
  let urlApi = "http://fs1.co.il/bus/phones/list.php"
  // בעבר היינו מעבירים גם מאפיין בשם קרוסדומיין 
  // היום אין צורך בו
  $.ajax({
    url: urlApi, // ENDPOINT כתובת ה שמשם יגיע המידע
    type:"GET", // שיטת הבקשה
    dataType: "JSON", // סוג המידע שאנחנו מצפים לקבל
    success: (data) => { // מיטודה קולבק שפועלת רק ברגע שקיבלנו את המידע הסופי כמו 200 ו 4
      console.log(data);
      managerInit(data);
      // נקרא לוויו איבנטס רק לאחר שהכל נטען
      // מכיוון שיכול להיווצר באג בגלילה ישר על ההתחלה
      // של המשתמש
      viewEvents()
    },
    error: (err) => { // קולבק במקרה שיש טעות כלשהי ויכיל בפרמטר את הטעות לרוב
      // במקרה של שגיאה מהשרת בלבד
      console.log("err", err);
    }
  })
}

// const doApi = () => {
//   let xhr = new XMLHttpRequest();
//   let urlApi = "http://fs1.co.il/bus/phones/list.php"
//   xhr.open("GET", urlApi);

//   xhr.addEventListener("readystatechange",() => {
//     if(xhr.status == 200 && xhr.readyState == 4){
//       let jsonData = JSON.parse(xhr.response)
//       console.log(jsonData);
//     }
//   })

//   xhr.send();
// }

