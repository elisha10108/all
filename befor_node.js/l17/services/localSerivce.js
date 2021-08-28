// localStorage.setItem("name","ofer")
// תפקיד הוקבץ לשמור מידע לפי בקשה בלוקאל
// ולהחזיר מידע לפי בקשה מהלוקאל

const saveToLocal = (_key,_ar) => {
  // נרצה להפוך את המערך לסטרינג
  let arToString = JSON.stringify(_ar)
  localStorage.setItem(_key,arToString);
}

const loadFromLocal = (_key) => {
  if(localStorage[_key]){
    // נרצה לקבל את המידע מפורסר לג'ייסון כי הוא שמור
    // בלוקאל כסטרינג
    return JSON.parse(localStorage[_key]);
  }
  return false;
}