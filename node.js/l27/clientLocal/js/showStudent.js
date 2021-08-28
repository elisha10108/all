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
  ar.map((item,i) => {
    addStudent("#id_tbody",item,i);
    console.log(item);
  })
}

// Homework -> do delte
const addStudent = (_parent,_item,_i) => {
  $(_parent).append(`
    <tr>
      <td>${_i}</td>
      <td>${_item.name}</td>
      <td>${_item.score}</td>
    </tr>
  `);
}