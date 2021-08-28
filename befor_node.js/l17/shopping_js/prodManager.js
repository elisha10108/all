// קובץ שאחראי לנהל את המערך של המידע של המוצרים
// כולל הצגה שלו בבאדי
// הוספה / הסרה וכו

// מקור האמת היחידי
//single source of truth

const prods_ar = [
  {name:"milk",amount:1,id:1},
  {name:"shoko",amount:3,id:2},
];

const prodsInit = () => {
  // prods_ar = (loadFromLocal("prods")) ? loadFromLocal("prods") : prods_ar;
  // בודק אם בלוקאל קיים כבר מידע 
  // ואם כן המערך של המוצרים יהיה שווה למידע
  // מהלוקאל
  if(loadFromLocal("prods")){
    // מכיוון שהפרודס איי אר הוא קונסט 
    // אנחנו בעצם חייבים לעשות ספלייס ואז להכניס את המידע
    // בפוש יחד עם ספרייד אופירטורס
    // בדיוק מה שקרה בפונצקיה resetProdslist()
    prods_ar.splice(0,prods_ar.length);
    prods_ar.push(...loadFromLocal("prods"));
  }


  createAllProds(prods_ar);
}


const createAllProds = (_ar) => {
  // צריכים כל פעם לנקות את האיי די ליסט
  //document.querySelector("#id_list").innerHTML = "";
  // $("#id_list").html("");
  $("#id_list").empty(); // מרוקן את האלמנט
  // זהו מעכשיו משתמשים במאפ במקום פור איץ
  _ar.map(item => {
    let prod = new Prod("#id_list",item);
    prod.render();
  })
  saveToLocal("prods",prods_ar);
}

const addNewProd = (_prodItem) => {
  prods_ar.push(_prodItem);
  createAllProds(prods_ar);
}

const resetProdslist = () => {
  // מכיון שבהמשך מערכים יגיאו ביבוא ויצוא ואז הם בטוח
  // יהיו קונסט ,כדי לרוקן אותם צריך להשתמש בספלייס במקום ב
  // prods_ar = []
  // אומר לו למחוק מתא 0 עד התא של מספר אורך התאים במערך
  // ובעצם את כל התאים
  prods_ar.splice(0,prods_ar.length);
  createAllProds(prods_ar);
}

const delSingleProd = (_id) => {
  // מחפש את האובייקט במערך שיש לו איי די זהה
  // לזה שאנחנו רוצים למחוק ומוחק אותו
  prods_ar.map((item,i )=> {
      if(item.id == _id){
        prods_ar.splice(i,1);
      }
  })
  createAllProds(prods_ar)
}
