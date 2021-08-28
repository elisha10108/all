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
      score:$("#id_score").val(),
      subject:"html"
    }
    $("#id_name").val("");
    $("#id_score").val("70");

    addNewStudentApi(studentData)


  })
}


const addNewStudentApi = async(_payloadBody) => {
  let myUrl = "http://localhost:3000/students/add"
  try{
    let data = await doApiMethod(myUrl, "POST" , _payloadBody);
    if(data._id){
      alert("student added succefuly !!!");
    }

  }
  catch(err){
    console.log(err);
    alert("something going worng , try again later");
  }

}