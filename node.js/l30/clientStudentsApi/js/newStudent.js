// Homework -> do delte
const addStudent = (_parent,_item,_i) => {
  let newTr = $("<tr></tr>");
  $(_parent).append(newTr)

  $(newTr).append(`
      <td>${_i}</td>
      <td>${_item.name}</td>
      <td>${_item.score}</td>
  `);

  let newTdDel = $("<td><button class='btn btn-danger'>Del</button></td>");
  let newTdEdit = $(`<td><a href="editStudent.html?id=${_item._id}" class='btn btn-info'>Edit</a></td>`);
  // children -> מתייחס לילד של הסלקטור בדולר לפי חוקי
  // הסלקטור של הסי אס אס במקרה הזה מדבר עם תגית בטון שנמצאת 
  // בתוך הטי די הספציפי
  $(newTdDel).children("button").on("click",() => {
    // alert(_item._id);
    if(confirm("are you sure you want to delete "+_item.name)){
      delStudent(_item._id)
    }
  })
  $(newTr).append(newTdDel);

  $(newTr).append(newTdEdit);
}
