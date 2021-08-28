const viewEventsInit = () => {
  document.querySelector("#reset_prods_btn").addEventListener("click",() => {
    resetProdslist();
  })

  document.querySelector("#id_form").addEventListener("submit",(evt) => {
    // למנוע את ברירת המחדל שהטופס ישגר את עצמו
    evt.preventDefault();
    let itemProd = {
      name: document.querySelector("#id_name_prod").value,
      amount: document.querySelector("#id_amount_prod").value,
      id:Date.now()
    }
    addNewProd(itemProd);

    // אפשרויות ליצירת איי די ייחודי
    // ראשונה: קאונטר 
    // שניה: מספר רנדומלי
    // שלישית:זמן יוניקס- כמה אלפיות שניה עברו משנת 1970.1.1
  })
}

//TODO: שיהיה אפשרות לעשות ריסט לרשימה

// TODO: שיהיה אפשרות לשמור בלוקאל את הרשימה 
// TODO: אפשרות למחוק פריט מסויים ולא את כולם

// 14:45