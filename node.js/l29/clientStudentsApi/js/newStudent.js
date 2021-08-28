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
