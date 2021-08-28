const viewEvents = () => {
  $(window).on("scroll", () => {
    let hDoc = $(document).height();
    let hWindow = $(window).height();
    let yWindow = $(window).scrollTop();
// ברגע שהגענו לתחתית של גובה המסמך 
    if(hWindow+yWindow >= hDoc){
      // מייצר את ה5 טלפונים הבאים אם קיימים מהמערך
      // שקיבלנו מה אפי
      addPhones(phones_ar,  nextPage());
    }
  })
}