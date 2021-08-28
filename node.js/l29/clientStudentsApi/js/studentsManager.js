const doApiManager = async(_url) => {
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
const delStudent = (_index) => {
  let students_ar = JSON.parse(localStorage["students"]);
  students_ar.splice(_index,1);

  localStorage.setItem("students",JSON.stringify(students_ar));
  createStudentsTr(localStorage["students"]);
}