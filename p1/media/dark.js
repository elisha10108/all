class DarkWindow {

  static createDarkWindow() {
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
      maxWidth: "500px",
      width: "100%",   
      minHeight: "300px",
      background: " rgba(88, 62, 46, 0.589)",
      textAlign: "center"
    }

    $("body").prepend(`
    <div class="dark_window">
    <div class="dark_box p-3">
       <img src="images/pic1.jpg"  style="height: 400px; width: 350px;">
        <button style="border-radius: 19px; background: red;">close</button>
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

  static showDarkWindow(_urlImg){
    $(".dark_window").fadeIn(600);
    $(".dark_window").css("display","flex");
    $(".dark_window img").attr("src",_urlImg);
   
  }

  
}