// מכיוון שהמחלקה באקספורט דיפולט , ניתן 
// לשנות את השם באימפורט של המחלקה שזה יתרון טוב
// כאשר יש פרוייקט ענק עם מספר מתכנתים
import Pixa from "./pixaClass.js";

// המשתנה יהיה קיים רק בקובץ הזה
// שזה יתרון של שיטת המודולים
// ולא יהיה בעיה של מרחב שמות עם קבצים אחרים
let user = "koko";

// מייצא את הפוקנציה שקבצים אחרים
// יוכלו להשתמש בו

// במידה ואני רוצה שקובץ אחר בתוכנה יוכל 
// לגשת לפונקציה חייבים להוסיף את האקספורט
// ניתן לבצע מספר פעמים פר דף אקספורט רגיל
export const managerInit = () => {
  console.log("manager init")
  let urlApi = "https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=dogs&image_type=photo&pretty=true"
  doApi(urlApi)
}

// בהמשך הקובץ ויו איבנטס יקרא לו שנלחץ על החיפוש
export const doApi= (_url) => {
  fetch(_url)
  .then(resp => resp.json())
  .then(data => {
    // האפי שאנחנו עובידם מולו של הפיקסה הג'ייסון שנקבל בנוי
    // כך שהמערך של המידע של התמונות נמצא בתוך המאפיין היטס
    console.log(data.hits);
    createPics(data.hits);
  })
}

const createPics = (_ar) => {
  $("#id_row").empty();
  _ar.map(item => {
    let pixa = new Pixa("#id_row",item);
    pixa.render();
  })
}