const viewEventsInit = () => {
  // document.querySelector("#reset_prods_btn").addEventListener("click",() => {
  //   resetProdslist();
  // })
  $("#reset_prods_btn").on("click",() => {
    resetProdslist();
  })

  $("#id_form").on("submit",(evt) => {
    // למנוע את ברירת המחדל שהטופס ישגר את עצמו
    evt.preventDefault();
    let itemProd = {
      name: $("#id_name_prod").val(),
      amount: $("#id_amount_prod").val(),
      id:Date.now()
    }
    addNewProd(itemProd);
    // מאפס את האינפוט
    $("#id_name_prod").val("");
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