console.log("this is page2 work");

class Page2{
  // סטטיק מאפשר לדבר ישירות מהמחלקה עם המיטודה
  // ללא צורך להכריז על משתנה שמשתמש בה
  static showName(_name) {
    console.log("your name is "+_name)
  }

  static showAge(_age) {
    console.log("your age is "+_age)
  }
}


// export default -> כמו בצד לקוח
module.exports = Page2;