// פונקציה אנונימית,
// נשתמש כאשר אנחנו יודיעם שרק אותו 
// איבנט יקרא לפונקציה
// 
//window.onload = init;

// function init(){

//}


window.onload = function(){
  let i = 0;
  while(i < 5){
    document.body.innerHTML += "hello,";
    i++;
  }
  document.body.innerHTML += "<hr>";


  for(let j = 0; j < 7  ; j++){
    document.body.innerHTML +="<br>  for --"+ (j + 1) * 2;
  }

}


