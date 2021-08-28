let page = 0;
let perPage = 5;
const phones_ar = [];

const managerInit = (_ar) => {
  phones_ar.push(..._ar);
  addPhones(phones_ar);
}

// הסיבה שאנחנו עובידם מול פונקציה ולא מול המשתנה
// כי בהמשך בשיטת המודולים לא נוכל לתקשר עם משתנים
// פרימטיבים ולהשפיע עליהם מקובץ אחר
const nextPage = () => {
  page++;
  return page;
}

const addPhones = (_ar, _page = 0) => {
  // יעבוד רק אם עדיין אין טלפונים מוצגים מהמערך
  // ואת זה נעשה לפי מספר עמוד כפול פרפייג' אם קטן מאורך
  // המערך
  if (_page * perPage <= _ar.length - 1) {

    // כל פעם אנחנו משווים את האיי למספר העמוד שמתחיל מ0 כפול
    // כמות הטלפונים פר קריאה, והתנאי תמיד גדול בכמות הטלפונים פר קריאה
    let starFrom = _page * perPage
    for (let i = starFrom; i < starFrom + perPage; i++) {
     // רק אם התא קיים יפעיל אותו
      if (_ar[i]) {
        let item = _ar[i];
        let phone = new Phone("#id_parent", item);
        phone.render();
      }
    }
  }
}