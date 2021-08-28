// משתנה שיכיל את האיי די של הרשומה שנלקח מהיו אר אל
// מהקווארי סטרינג איי די // ?id=....
let idStudent

$(() => {
  init()
})

const init = () => {
  updateFormValsOfStudent();
  viewEvents();
}

const updateFormValsOfStudent = async () => {
  //window.location.search -> מחזיר את היו אראל של העמוד הנוכחי
  let urlParams = new URLSearchParams(window.location.search);
  // ?id=....
  idStudent = urlParams.get('id');
  // console.log(idStudent)
  let url = "http://localhost:3000/students/single/" + idStudent;
  // דבר ראשון נרצה לעדכן את הטופס במידע הנוכחי של הרשומה
  // לפני העריכה
  let data = await doApi(url);
  console.log(data);
  $("#id_name").val(data.name);
  $("#id_score").val(data.score);
  $("#id_select").val(data.subject);

}

const viewEvents = () => {
  $("#id_form").on("submit", (e) => {
    e.preventDefault();
    let studentData = {
      name: $("#id_name").val(),
      score: $("#id_score").val(),
      subject: $("#id_select").val()
    }
    doApiEdit(studentData);
    // TODO: update work
    // option to edit the subject
    // addNewStudentApi(studentData)
    // 14:47

  })
}

const doApiEdit = async (_body) => {
  let url = "http://localhost:3000/students/edit/" + idStudent;
  let data = await doApiMethod(url, "PUT", _body)
  if (data.n == 1) {
    alert("edit success");
    // כמו ללחוץ אחורה בדפדפן
    window.history.back();
    // let u = history.go(-1);
    // u += "?param = refresh"; // make this whatever you want
    // document.location = u; // go back - to a URL with the parameter added
    // window.history.go(-1)
    // window.location.reload(history.back());
    // document.location.reload();
    // document.location.href = "showStudents.html";
  }
}