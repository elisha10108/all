$(() => {
  init();
})

const init = () => {
  // testAsyncCommand();
  doAPi()
}

// const testAsyncCommand = () => {
//   setTimeout(() => {
//     console.log("first")
//   },1000)
//   setTimeout(() => {
//     console.log("second")
//   },1500)
//   console.log("third")
// }

const doAPi = () => {
  // מחלקה שיודעת לבצע בקשות איי פי אייי
  let Xhr = new XMLHttpRequest();

  let endPointUrl = "http://fs1.co.il/bus/bitcoin.php";
  // הכנה לשיגור , דומה שבצוללת מכינים את הטורפידו לשיגור
  Xhr.open("GET",endPointUrl);

  Xhr.addEventListener("readystatechange",() => {
    // READYSTATE -> הסבר בלינק על כל מספר 4 בגדול זה שהכל הסתיים וכל המידע הגיע
    // https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp
    // 200 -> בודק שהמצב תקין והבקשה התבצעה בהצלחה והמידע התקבל אצלנו בצד לקוח בהצלחה
    if(Xhr.status == 200 && Xhr.readyState == 4){
      let json_ar = JSON.parse(Xhr.response);
      console.log(json_ar);
      // רק אחרי שקיבלנו את כל המידע נפעיל את הפונקציה
      // האנסינכרונית
      createCoins(json_ar);
    }
  })
  // שיגור הבקשה , כמו שיגור טורפידו
  Xhr.send()
  
}