window.onload = function(){
  viewEvents();
  checkLocal();
}

function checkLocal(){
  // בודק אם בלוקאל קיים מידע שהיוזר
  // כבר הזין בעבר ומציג לו אותו אם כן
  // ככה שהוא יחזור המידע יהיה מוכן
  if(localStorage["phone"]){
    dq("#id_phone").value = localStorage["phone"]
  }

  if(localStorage["name"]){
    dq("#id_name").value = localStorage["name"]
  }
}


function viewEvents(){
  document.querySelector("#id_phone").addEventListener("input",function(){
    let phoneInp = dq("#id_phone").value;
    console.log(phoneInp)
    localStorage.setItem("phone",phoneInp)
  })

  document.querySelector("#id_name").addEventListener("input",function(){
    let nameInp = dq("#id_name").value;
    console.log(nameInp)
     
    localStorage.setItem("name",nameInp)
  })
}