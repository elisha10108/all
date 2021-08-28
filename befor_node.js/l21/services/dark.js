class DarkWindow {
  // static -> מאפשר לקרוא ישירות למיטודה בלי לייצר
  // משתנה שמשתמש במחלקה 
  // let dark = new DarkWindow() // חוסך את זה
  //  DarkWindow.showInfo() כלומר נוכל לכתוב ישר


  
// 13:05 
  static conuter = 4;

  static createDarkWindow() {
    // הרעיון שלא נצטרך לחבר גם סי אס אס לקובץ הראשי
    let darkWindowCss = {
      position: "fixed",
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.7)",
      top: 0,
      left: 0,
      zIndex: 999,
      display: "none",
      justifyContent: "center",
      alignItems: "center"

    }

    let darkBoxCss = {
      maxWidth: "600px",
      width: "100%",
      minHeight: "400px",
      background: "white",
      border: "2px solid grey",
      textAlign: "center"
    }

    $("body").prepend(`
    <div class="dark_window">
    <div class="dark_box p-3">
        <img src="images/pic1.jpg"  class="w-50">
        <h3>Picture of something</h3>
        <p>para kdlsajdlaks </p>
        <button>close</button>
      </div>
    </div>
    `)

    $(".dark_window").css(darkWindowCss);
    $(".dark_window .dark_box").css(darkBoxCss);

    DarkWindow.darkViewEvents();
  }

  static darkViewEvents(){
    $(".dark_window button").on("click",() => {
      $(".dark_window").fadeOut(300);
    })
  }

  static async showDarkWindowApi(_id){
    $(".dark_window").fadeIn(600);
    $(".dark_window").css("display","flex");

    let myUrl = `http://www.omdbapi.com/?i=${_id}&apikey=5a292f28`
    let resp = await fetch(myUrl);
    let data = await resp.json();
    // בברירת מחדל הפייד אין הופכים את האלמנט לבלוק
    $(".dark_window img").attr("src",data.Poster);
    $(".dark_window h3").html(data.Title);
    $(".dark_window p").html(data.Plot + "<br> Genere:"+data.Genre + "<br> Score: "+data.Metascore);
  }


}

export default DarkWindow