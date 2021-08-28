// NAME SPACE -מרחב שמות
// כאשר מייצרים מודול חיצוני
// או יודעים שעובדים בפרוייקט של מספר מתכנתים
// ואנחנו מייצרים תוכנה קטנה או פונקציות לפרוייקט ענק
// עדיף כדי לשמור על מרחב שמות של הפרוייק 
// לייצר את כל הפקודות  בתוך אובייקט ואז סיכוי נמוך להתנגשות
// למרחב שמות של מתכנת אחר וגם אם זה קורה בטעות
// אפשר בשניה לשנות את השם של האובייקט/מחלקה וזה מתוקן

// בשיטת המודלים שנגיע אליה בהמשך בכלל לא תיהיה בעיה כזאת


const fontStyle = {
  changeColor:(_selector,_fontColor) => {
    document.querySelector(_selector).style.color = _fontColor;
  },
  changeText:(_selector,_txt) => {
    document.querySelector(_selector).innerHTML = _txt;
  }
}


