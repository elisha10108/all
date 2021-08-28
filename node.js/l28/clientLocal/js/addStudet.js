$(() => {
  init()
})

const init = () => {
  viewEvents();
}

const viewEvents = () => {
  $("#id_form").on("submit", (e) => {
    e.preventDefault();
    let studentData = {
      name:$("#id_name").val(),
      score:$("#id_score").val()
    }
    $("#id_name").val("");
    $("#id_score").val("70");
    // בודק אם קיים בכלל בלוקאל קיי עם השם סטוינדטס
    if(!localStorage["students"]){
      // אם לא קיים מייצר מערך עם תא אחד ועושה סטרינגפי
      // שמנו סוגריים מרובעות כדי שיתייחס למידע כמערך שהוא נשמר
      
      let ar = JSON.stringify([studentData]);
      // ושומר את המידע בתוך הלוקאל בקיי סטוידנטס
      return localStorage.setItem("students",ar);
    }
    // אם הקיי כבר כן קיים
    // אז קודם שולף את המידע שיש בלוקאל של המחשב ומתרגם אותו לגייסון של מערך
    let students_ar = JSON.parse(localStorage["students"]);
    // ואז דוחף למערך של הלוקאל את האובייקט החדש שמורכב
    // מהמידע שמהשתמש הכניס
    students_ar.push(studentData);
    // מעדכן מחדש את הלוקאל עם המידע החדש והאובייקט החדש במערך
    localStorage.setItem("students",JSON.stringify(students_ar));


  })
}