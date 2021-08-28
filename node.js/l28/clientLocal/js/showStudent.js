$(() => {
  init();
})

const init = () => {
  if (localStorage["students"]) {
    createStudentsTr(localStorage["students"])
  }
}


const createStudentsTr = (localData) => {
  let ar = JSON.parse(localData);
  $("#id_tbody").empty();
  ar.map((item,i) => {
    addStudent("#id_tbody",item,i);
    console.log(item);
  })
}

// Homework -> do delte
const addStudent = (_parent,_item,_i) => {
  let newTr = $("<tr></tr>");
  $(_parent).append(newTr)

  $(newTr).append(`
      <td>${_i}</td>
      <td>${_item.name}</td>
      <td>${_item.score}</td>
  `);

  let newTdDel = $("<td><button class='btn btn-danger'>del</button></td>");
  // children -> מתייחס לילד של הסלקטור בדולר לפי חוקי
  // הסלקטור של הסי אס אס במקרה הזה מדבר עם תגית בטון שנמצאת 
  // בתוך הטי די הספציפי
  $(newTdDel).children("button").on("click",() => {
    // alert("del");
    if(confirm("are you sure you want to delete "+_item.name)){
      delStudent(_i)
    }
  })
  $(newTr).append(newTdDel);
}

// לשלוף מחדש את המערך , ולבצע לו ספלייס באינדקס של אותו רשומה
// וכמובן לשמור מחדש את המערך בלוקאל ולהציג מחדש את הטבלה
const delStudent = (_index) => {
  let students_ar = JSON.parse(localStorage["students"]);
  students_ar.splice(_index,1);

  localStorage.setItem("students",JSON.stringify(students_ar));
  createStudentsTr(localStorage["students"]);
}