// תמיד יכיל את היואר אל האחרון שעשינו לו בקשה 
let historyUrl = "";
// מבצע שאילתא כדי להציג את הטבלה
// url -> הברירת מחדל שלו זה המשתנה היסטורי יו אר אל אם לא
// העברנו פרמטר
const doApiManager = async(_url = historyUrl) => {
  historyUrl = _url;
  try{
  let data = await doApi(_url);
  console.log(data);
  createStudentsTr(data)
  }
  catch(err){
    console.log("err",err)
    alert("there problem , try again later")
  }
}

const createStudentsTr = (ar) => {
  $("#id_tbody").empty();
  ar.map((item,i) => {
    addStudent("#id_tbody",item,i);
    //console.log(item);
  })
}

// לשלוף מחדש את המערך , ולבצע לו ספלייס באינדקס של אותו רשומה
// וכמובן לשמור מחדש את המערך בלוקאל ולהציג מחדש את הטבלה
const delStudent = async(_id) => {
  let delURl = "http://localhost:3000/students/del/"+_id;
  try{
    let data = await doApiMethod(delURl,"DELETE");
        // אם מזהה שהייתה מחיקה ירפרש את הטבלה עם מידע חדש 
      // מהאפי שכבר הרשומה לא קיימת בו ואז יוצג למשתמש
      // שהרשומה בעצם נמחקה
    if(data.n == 1){ 
      doApiManager();
      createPagesUi();
    }
  }
  catch(err){
    console.log("err",err)
    alert("there problem , try again later")
  }
}